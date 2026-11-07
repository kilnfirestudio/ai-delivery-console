import type { Evidence, KnowledgeItem } from '../types';

/** Knowledge catalog: every item referenced anywhere in the console. Client-layer items use their client prefix (C-A-…). */
export const knowledge: KnowledgeItem[] = [
  // L0 全局
  { id: 'K-021', text: '多个子任务共用的文件，先单独改完再并行', short: '共用文件先单独改完再并行', layer: 'L0', scope: 'L0 全局', level: '默认', credibility: '已验证', lifecycle: '已确认', cited30d: 44, weeklyCitations: [2, 3, 4, 6, 5, 8, 9, 7] },
  { id: 'K-034', text: '按文件范围切分子任务', short: '按文件范围切分子任务', layer: 'L0', scope: 'L0 全局', level: '默认', credibility: '已验证', lifecycle: '已确认', cited30d: 36, weeklyCitations: [0, 1, 3, 5, 6, 7, 8, 6] },
  { id: 'K-035', text: '图片容器用 aspect-ratio 固定比例，防止布局跳动', short: '图片容器用固定比例', layer: 'L0', scope: 'L0 全局', level: '默认', credibility: '已验证', lifecycle: '已确认', cited30d: 26, weeklyCitations: [1, 2, 2, 3, 4, 3, 5, 6] },
  { id: 'K-040', text: '图片懒加载要给出占位尺寸，防止布局跳动', short: '懒加载给占位尺寸', layer: 'L0', scope: 'L0 全局', level: '参考', credibility: '假设', lifecycle: '已确认', cited30d: 2 },
  { id: 'K-061', text: 'Codex 需要显式写出文件清单', short: 'Codex 需要显式文件清单', layer: 'L0', scope: 'L0 全局', level: '默认', credibility: '初步验证', lifecycle: '可能过时', note: '模型升级后可能不再需要 · 建议做消融测试' },
  { id: 'K-002', text: '交付前必须过回归', short: '交付前必须过回归', layer: 'L0', scope: 'L0 全局', level: '红线', credibility: '已验证', lifecycle: '已确认', cited30d: 31 },
  // L1 Shopline 领域
  { id: 'K-015', text: '折扣叠加的计算顺序', short: '折扣叠加的计算顺序', layer: 'L1', scope: 'L1 Shopline', level: '默认', credibility: '初步验证', lifecycle: '已确认', cited30d: 29, weeklyCitations: [5, 4, 6, 3, 2, 4, 3, 2], note: 'v3 修订后降为初步验证' },
  { id: 'K-008', text: '移动端标题不超过 28px', short: '移动端标题不超过 28px', layer: 'L1', scope: 'L1 Shopline', level: '默认', credibility: '已验证', lifecycle: '已确认', weeklyCitations: [4, 3, 3, 2, 2, 1, 2, 3], note: '与客户要求冲突' },
  { id: 'K-112', text: 'Shopline 主题默认移动端断点 768px', short: '默认移动端断点 768px', layer: 'L1', scope: 'L1 Shopline 领域', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  { id: 'K-019', text: 'Liquid 模板里避免嵌套三层以上的循环', short: 'Liquid 循环嵌套不超过三层', layer: 'L1', scope: 'L1 Shopline', level: '建议', credibility: '已验证', lifecycle: '已确认', cited30d: 7, weeklyCitations: [1, 1, 0, 2, 1, 1, 0, 1] },
  { id: 'K-044', text: 'Shopline 图片服务 v1 参数写法', short: '图片服务 v1 参数写法', layer: 'L1', scope: 'L1 Shopline', level: '默认', credibility: '已验证', lifecycle: '可能过时', note: '官方文档 10/20 更新，当下条件变了', evidenceIds: ['E-208'] },
  { id: 'K-120', text: '价格精度按店铺货币设置', short: '按店铺货币设置', layer: 'L1', scope: 'L1 Shopline', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  { id: 'K-118', text: '折扣标签在窄屏不换行', short: '折扣标签窄屏不换行', layer: 'L1', scope: 'L1 Shopline', level: '建议', credibility: '假设', lifecycle: '已确认', note: '本周新增' },
  // L2 项目
  { id: 'K-027', text: '商品图片的裁切走服务端渲染，不在前端用 CSS 硬裁', short: '商品图片裁切走服务端渲染', layer: 'L2', scope: 'L2 bundle 插件', level: '建议', credibility: '初步验证', lifecycle: '已确认', cited30d: 17, weeklyCitations: [0, 0, 1, 2, 2, 3, 4, 5], evidenceIds: ['E-311', 'E-208', 'E-390', 'E-402', 'E-455'] },
  { id: 'K-011', text: '商品图统一 1:1 裁切', short: '商品图统一 1:1 裁切', layer: 'L2', scope: 'L2 bundle 插件', level: '建议', credibility: '已验证', lifecycle: '已取代', supersededBy: 'K-027' },
  { id: 'K-020', text: 'bundle 价格统一由服务端计算', short: 'bundle 价格统一由服务端计算', layer: 'L2', scope: 'L2 bundle 插件', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  { id: 'K-052', text: 'xuvia 旧版接口的鉴权方式', short: 'xuvia 旧版接口鉴权', layer: 'L2', scope: 'L2 xuvia', level: '参考', credibility: '假设', lifecycle: '已确认', note: '45 天未调用' },
  { id: 'K-073', text: '个人站旧版字体加载方式', short: '个人站旧版字体加载', layer: 'L2', scope: 'L2 个人站', level: '参考', credibility: '假设', lifecycle: '已确认', note: '38 天未调用' },
  { id: 'K-080', text: '案例图统一 4:3', short: '案例图统一 4:3', layer: 'L2', scope: 'L2 个人站', level: '建议', credibility: '初步验证', lifecycle: '已确认' },
  { id: 'K-090', text: '直播语音采样率 48k', short: '直播语音采样率 48k', layer: 'L2', scope: 'L2 直播语音', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  // L3 客户
  { id: 'C-A-003', text: '品牌色和 logo 区域不可改动', short: '品牌色与 logo 区不可改', layer: 'L3', scope: 'L3 客户 A', level: '红线', credibility: '已验证', lifecycle: '已确认', weeklyCitations: [3, 2, 4, 3, 5, 4, 6, 5] },
  { id: 'C-A-001', text: '先给预览站链接，确认后再上线', short: '先给预览站链接，确认后再上线', layer: 'L3', scope: 'L3 客户 A', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  { id: 'C-A-007', text: '价格显示保留两位小数', short: '价格显示保留两位小数', layer: 'L3', scope: 'L3 客户 A', level: '默认', credibility: '初步验证', lifecycle: '已确认' },
  { id: 'C-A-009', text: '移动端首屏不放轮播', short: '移动端首屏不放轮播', layer: 'L3', scope: 'L3 客户 A', level: '建议', credibility: '初步验证', lifecycle: '已确认' },
  { id: 'C-B-004', text: '客户 B 移动端断点 768px', short: '断点 768px', layer: 'L3', scope: 'L3 客户 B', level: '默认', credibility: '已验证', lifecycle: '已确认' },
  { id: 'C-B-002', text: '不使用弹窗', short: '不使用弹窗', layer: 'L3', scope: 'L3 客户 B', level: '默认', credibility: '初步验证', lifecycle: '已确认' },
  // 候选
  { id: 'C-0219', text: '客户 A 主题的移动端断点是 750px，不是默认的 768px', short: '移动端断点 750px', layer: 'L3', scope: 'L3 客户 A', level: '默认', credibility: '初步验证', lifecycle: '候选', note: '等你确认', evidenceSummary: '主题源码 `layout/theme.liquid` 第 88 行 · 预览站截图 2 张' },
  { id: 'C-0220', text: 'xuvia 选题接口单次最多 50 条', short: 'xuvia 选题接口单次最多 50 条', layer: 'L2', scope: 'L2 xuvia', level: '默认', credibility: '假设', lifecycle: '候选', note: '高后果：影响批量生成' },
];

export const evidence: Evidence[] = [
  { id: 'E-311', title: '9 月客户 A 移动端图片返工复盘', kind: '返工复盘', date: '09/12', note: '原文在客户 A 库，这里引用去标识后的摘要' },
  { id: 'E-208', title: 'Shopline 图片服务参数文档截图', kind: '官方文档', date: '09/14', note: '2026-09 版，官方 10/20 已更新' },
  { id: 'E-102', title: '布局跳动问题复盘', kind: '复盘记录', date: '06/30' },
  { id: 'E-450', title: '客户 A 品牌手册 v2', kind: '客户提供', date: '08/03' },
  { id: 'E-077', title: '8 月共用样式回归失败日志', kind: '回归脚本', date: '08/21' },
  { id: 'E-390', title: '客户 B 主题验证截图', kind: '验证截图', date: '10/03', note: '3 种比例商品图，主体完整' },
  { id: 'E-402', title: '10 月底回归报告', kind: '回归报告', date: '10/28', note: '相关区块 14 项全部通过' },
  { id: 'E-455', title: 'T-0390 返工记录', kind: '返工记录', date: '10/16', note: '原因是图片服务参数写错，规则本身没问题' },
  { id: 'E-512', title: '主题源码 `layout/theme.liquid` 第 88 行', kind: '主题源码', date: '11/07', excerpt: { hash: '9f3c…a1', lines: [[87, '/* mobile */'], [88, '@media screen and (max-width: 749px) {'], [89, '  .page-width { padding: 0 16px; }']] } },
  { id: 'E-513', title: '预览站截图 · iPhone 13', kind: '预览站截图', date: '11/07', note: '749px 处布局切换 · 开发 C 14:38 上传' },
  { id: 'E-514', title: '预览站截图 · 浏览器宽 750px', kind: '预览站截图', date: '11/07', note: '仍是桌面布局 · 开发 C 14:39 上传' },
];
