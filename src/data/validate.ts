import type { ConsoleData } from './index';
import { subtaskKey } from './selectors';

/**
 * Referential checks across the dataset: every ID one entity points at must exist. Returns a list of
 * problems (empty when consistent). Run in development, and against real data before switching sources.
 */
export function validateData(d: ConsoleData): string[] {
  const problems: string[] = [];
  const has = (set: Set<string>, id: string | undefined, where: string) => {
    if (id !== undefined && !set.has(id)) problems.push(`${where}: unknown id ${id}`);
  };
  const projects = new Set(d.projects.map((p) => p.id as string));
  const clients = new Set(d.clients.map((c) => c.id as string));
  const reqs = new Set(d.requirements.map((r) => r.id));
  const subs = new Set(d.subtasks.map(subtaskKey));
  const agents = new Set(d.agents.map((a) => a.id as string));
  const know = new Set(d.knowledge.map((k) => k.id));
  const ev = new Set(d.evidence.map((e) => e.id));
  const attention = new Set(d.attention.map((a) => a.id));

  d.clients.forEach((c) => has(projects, c.projectId, `client ${c.id}`));
  d.requirements.forEach((r) => {
    has(projects, r.projectId, `requirement ${r.id}`);
    has(clients, r.clientId, `requirement ${r.id}`);
  });
  d.subtasks.forEach((s) => {
    has(reqs, s.requirementId, `subtask ${s.id}`);
    has(agents, s.agentId, `subtask ${s.id}`);
    s.dependsOn?.forEach((x) => has(subs, `${s.requirementId}/${x}`, `subtask ${s.id} dependsOn`));
  });
  d.agents.forEach((a) => has(subs, a.activeSubtask, `agent ${a.id}`));
  d.attention.forEach((a) => {
    has(reqs, a.refs?.requirement, `attention ${a.id}`);
    has(subs, a.refs?.subtask, `attention ${a.id}`);
    has(know, a.refs?.knowledge, `attention ${a.id}`);
    has(know, a.refs?.candidate, `attention ${a.id}`);
  });
  d.knowledge.forEach((k) => {
    has(know, k.supersededBy, `knowledge ${k.id} supersededBy`);
    k.evidenceIds?.forEach((e) => has(ev, e, `knowledge ${k.id}`));
  });
  d.knowledgeRecords.forEach((r) => {
    has(know, r.id, 'knowledge record');
    r.evidence.forEach((e) => has(ev, e.id, `knowledge record ${r.id}`));
    r.relations?.forEach((x) => has(know, x.id, `knowledge record ${r.id} relation`));
  });
  d.taskDetails.forEach((t) => {
    has(subs, t.subtask, 'task detail');
    has(attention, t.help?.attentionId, `task detail ${t.subtask}`);
    t.retrieved.forEach((x) => has(know, x.id, `task detail ${t.subtask} retrieved`));
    t.trace.evidence.forEach((x) => has(ev, x, `task detail ${t.subtask} trace`));
    t.trace.supports.forEach(([e, k]) => {
      has(ev, e, `task detail ${t.subtask} supports`);
      has(know, k, `task detail ${t.subtask} supports`);
    });
    t.trace.produces.forEach(([k]) => has(know, k, `task detail ${t.subtask} produces`));
    t.candidates.forEach((x) => has(know, x, `task detail ${t.subtask} candidates`));
  });
  d.intakeRecords.forEach((r) => {
    has(reqs, r.requirementId, 'intake');
    r.knowledgeUsed.forEach((k) => has(know, k.id, `intake ${r.requirementId}`));
    const past = new Set(d.pastRequirements.map((p) => p.id));
    r.similar.forEach((x) => has(past, x, `intake ${r.requirementId} similar`));
    const req = d.requirements.find((x) => x.id === r.requirementId);
    if (req?.acceptance && req.acceptance.length !== r.criteriaSources.length) problems.push(`intake ${r.requirementId}: ${r.criteriaSources.length} criteria sources for ${req.acceptance.length} criteria`);
  });
  d.visualReviews.forEach((v) => has(subs, v.subtask, `visual review ${v.id}`));
  d.clientProfiles.forEach((p) => {
    has(clients, p.clientId, 'client profile');
    p.knowledgeShown?.forEach((k) => has(know, k.id, `client profile ${p.clientId}`));
  });
  d.observation.identities.forEach((i) => has(agents, i.agentId, 'gateway identity'));
  d.observation.gatewayCalls.forEach((c) => has(agents, c.identity, `gateway call ${c.time}`));
  d.knowledge.forEach((k) => {
    if (k.weeklyCitations && k.weeklyCitations.length !== 8) problems.push(`knowledge ${k.id}: weeklyCitations should cover 8 weeks`);
  });
  d.observation.coreMetrics.forEach((m) => {
    if (m.values.length !== d.observation.weeks.length) problems.push(`metric ${m.id}: ${m.values.length} values for ${d.observation.weeks.length} weeks`);
  });
  return problems;
}
