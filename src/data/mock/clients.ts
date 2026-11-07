import type { ClientProfile } from '../types';

export const clientProfiles: ClientProfile[] = [
  {
    clientId: 'A',
    status: '合作中',
    summary: '户外品牌 · Shopline · 合作 8 个月',
    knowledgeCount: 11,
    evidenceCount: 312,
    requirementCount: 14,
    rework: '18% → 9%',
    profile: [
      ['沟通', '微信；习惯先看预览站再上线'],
      ['验收', '运营负责人确认，通常在上线前一天'],
      ['上线窗口', '周日晚上'],
      ['偏好来源', '全部来自客户原话或确认单，可点开证据'],
    ],
    isolation: [
      { label: '加密', detail: '客户 A 独立密钥 KA-03 · 09/01 轮换', ok: true },
      { label: '可见范围', detail: '只对标记为客户 A 的任务可见', ok: true },
      { label: '本周访问', detail: '86 次，全部来自客户 A 的任务', ok: true },
      { label: '越权访问尝试', detail: '1 次：开发 B 在客户 A 任务中请求客户 B 层，已拒绝', ok: false },
      { label: '索引', detail: '按客户分区，可单独删除', ok: true },
    ],
    knowledgeShown: [
      { id: 'C-A-003' },
      { id: 'C-A-001' },
      { id: 'C-A-007', relation: '覆盖 L1 K-120“按店铺货币设置”· 理由：客户运营要求统一' },
      { id: 'C-A-009' },
      { id: 'C-0219', relation: '将覆盖 L1 K-112（768px）· 理由待你填写' },
    ],
  },
  { clientId: 'B', status: '合作中', summary: '家居品牌 · Shopline · 合作 3 个月', knowledgeCount: 8, evidenceCount: 141, requirementCount: 5, rework: '14%' },
  {
    clientId: 'C',
    status: '已销毁',
    summary: '合作 09/30 结束 · 密钥 10/01 销毁',
    remains: [
      ['客户库与证据', '已删除'],
      ['索引分区', '已删除'],
      ['事件日志', '只剩 ID 与哈希'],
      ['上提的去标识知识', '2 条保留'],
    ],
  },
];
