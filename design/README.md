# 设计快照

这里存放 claude.ai 设计画布「AI 交付全局控制台」的定稿快照，画布是视觉的唯一来源，代码跟着画布走。

- 画布：https://claude.ai/artifact/XtxLwATyouN2PguggKG5YC
- 当前快照：v20（版本 id `1794114388-080d`），2026-11-08 定稿
- `canvas/`：19 个画板原文件（`*.dc.html`）和 `canvas.json`
- `manifest.json`：每个画板对应的路由、代码文件和内容哈希

## 怎么用

- 改页面前，先对照 `canvas/` 里对应画板。视觉不要求像素级一致，组件可以做小幅统一。
- 画布上的知识图谱是粒子模拟停稳后的样子；网站里是可交互的版本（`src/pages/graph/`）。
- 所有画板共用一份 `<helmet><style>`，对应 `src/styles/design-system.css` 和 `src/ui/`。

## 同步机制

设计已在 v20 定稿。每天检查一次画布版本，版本号比 `manifest.json` 里的新时，只通知仓库所有者，列出改动的画板、对应路由和代码文件，不会自动开 PR 或 Issue。

所有者确认要跟进后：

1. 开一个 PR 更新这里的快照和 `manifest.json`；
2. 为每个改动的画板开一个 Issue，写明对应的路由和代码文件，等实现。

代码实现完成、视觉对上之后，关闭对应 Issue。
