// 按 .github/agent-tasks.json 给外部 agent 派活，并把进度发到通知 Issue。
// 由 .github/workflows/agent-dispatch.yml 通过 actions/github-script 调用。
// 规则：
//   - 当前批次 = 还有未关闭 Issue 的最小批次号；只派当前批次。
//   - Issue 的 after 依赖全部关闭后才派。
//   - 已有派活留言（DISPATCH_MARK）或已有打开的 PR 写了 Closes #N 的，不重复派。
const fs = require('fs');
const path = require('path');

const DISPATCH_MARK = '<!-- agent-dispatch -->';
const PROGRESS_MARK = '<!-- agent-progress -->';

module.exports = async ({ github, context, core, dryRun, usingDispatchToken }) => {
  const { owner, repo } = context.repo;
  const config = JSON.parse(
    fs.readFileSync(path.join(process.env.GITHUB_WORKSPACE, '.github/agent-tasks.json'), 'utf8'),
  );

  // 1. 读取每个任务 Issue 的状态
  const issues = new Map();
  for (const task of config.tasks) {
    const { data } = await github.rest.issues.get({ owner, repo, issue_number: task.issue });
    issues.set(task.issue, data);
  }
  const isClosed = (n) => issues.get(n)?.state === 'closed';

  // 2. 打开的 PR 里写了 Closes/Fixes/Resolves #N 的 Issue 视为已在做
  const openPrs = await github.paginate(github.rest.pulls.list, { owner, repo, state: 'open', per_page: 100 });
  const prFor = new Map();
  for (const pr of openPrs) {
    const re = /\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\s+#(\d+)\b/gi;
    for (const m of (pr.body || '').matchAll(re)) prFor.set(Number(m[1]), pr);
  }

  const openTasks = config.tasks.filter((t) => !isClosed(t.issue));
  if (openTasks.length === 0) {
    core.info('所有任务都已关闭');
    return;
  }
  const currentBatch = Math.min(...openTasks.map((t) => t.batch));

  // 3. 找出可以派的任务
  const dispatched = [];
  for (const task of openTasks) {
    if (task.batch !== currentBatch) continue;
    if (task.batch < (config.autoFromBatch || 1)) {
      core.info(`#${task.issue} 属于手动派活的批次 ${task.batch}，跳过`);
      continue;
    }
    const waiting = (task.after || []).filter((n) => !isClosed(n));
    if (waiting.length) {
      core.info(`#${task.issue} 等待 ${waiting.map((n) => '#' + n).join(' ')}`);
      continue;
    }
    if (prFor.has(task.issue)) {
      core.info(`#${task.issue} 已有 PR #${prFor.get(task.issue).number}`);
      continue;
    }
    const comments = await github.paginate(github.rest.issues.listComments, {
      owner, repo, issue_number: task.issue, per_page: 100,
    });
    if (comments.some((c) => (c.body || '').includes(DISPATCH_MARK))) {
      core.info(`#${task.issue} 已派过`);
      continue;
    }

    const agent = config.agents[task.agent];
    const body = dispatchComment(task, issues.get(task.issue), agent);
    core.info(`派活 #${task.issue} → ${agent.name}（${agent.mode}）`);
    if (!dryRun) {
      await github.rest.issues.createComment({ owner, repo, issue_number: task.issue, body });
    }
    dispatched.push({ task, agent });
  }

  // 4. 有新派活时在通知 Issue 发一条汇总
  if (dispatched.length && !dryRun) {
    await github.rest.issues.createComment({
      owner, repo, issue_number: config.notifyIssue,
      body: progressComment({ config, issues, prFor, currentBatch, dispatched, usingDispatchToken }),
    });
  } else if (dispatched.length === 0) {
    core.info(`批次 ${currentBatch}：没有新的可派任务`);
  }
};

function prompt(task, issue, agent) {
  return [
    `请按仓库根目录的 AGENTS.md 完成 Issue #${task.issue}「${issue.title}」。`,
    `- 只做这个 Issue 写到的范围，验收标准见 Issue 正文。`,
    `- 分支：${agent.branchPrefix}/${task.issue}-<简短英文>；PR 标题用 Issue 标题；PR 描述按模板，第一行写 Closes #${task.issue}。`,
    `- 开 PR 前本地跑过 npm run lint 和 npm run build，都要零报错。`,
    `- 截不了图就在 PR 里写明“未附截图”。`,
  ].join('\n');
}

function dispatchComment(task, issue, agent) {
  if (agent.mode === 'mention') {
    return `${DISPATCH_MARK}\n${agent.mention} ${prompt(task, issue, agent)}\n\n_批次 ${task.batch}，由派活工作流自动发出。_`;
  }
  return [
    DISPATCH_MARK,
    `**批次 ${task.batch} 已开放，这个 Issue 由 ${agent.name} 做。** ${agent.name} 不能远程触发，请所有者把下面的提示词贴进 ${agent.name}：`,
    '',
    '```text',
    prompt(task, issue, agent),
    '```',
  ].join('\n');
}

function progressComment({ config, issues, prFor, currentBatch, dispatched, usingDispatchToken }) {
  const lines = [PROGRESS_MARK, `### 派活：批次 ${currentBatch}`, ''];
  for (const { task, agent } of dispatched) {
    const how = agent.mode === 'mention' ? `已 ${agent.mention}` : '**需要手动贴提示词**';
    lines.push(`- #${task.issue} ${issues.get(task.issue).title} → ${agent.name}，${how}`);
  }
  if (!usingDispatchToken && dispatched.some((d) => d.agent.mode === 'mention')) {
    lines.push('', '> 这次是用 github-actions 机器人账号 @ 的，Codex / Cursor 可能不响应。配置 `DISPATCH_TOKEN` 后改用所有者账号发。');
  }
  lines.push('', '| 批次 | 已合并 | 进行中（有 PR） | 未开始 |', '|---|---|---|---|');
  const batches = [...new Set(config.tasks.map((t) => t.batch))].sort((a, b) => a - b);
  for (const b of batches) {
    const ts = config.tasks.filter((t) => t.batch === b);
    const done = ts.filter((t) => issues.get(t.issue).state === 'closed');
    const doing = ts.filter((t) => issues.get(t.issue).state !== 'closed' && prFor.has(t.issue));
    const rest = ts.length - done.length - doing.length;
    const fmt = (arr) => (arr.length ? arr.map((t) => '#' + t.issue).join(' ') : '—');
    lines.push(`| ${b} | ${done.length}/${ts.length} | ${fmt(doing)} | ${rest} |`);
  }
  return lines.join('\n');
}
