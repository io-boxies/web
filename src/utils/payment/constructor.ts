import type { PayHistory } from '.'

export const newPayHistory = (p: Partial<PayHistory>): PayHistory => ({
  createdAt: p.createdAt ?? new Date(),
  userId: p.userId!,
  amount: p.amount ?? 0,
  state: p.state!,
  pendingAmount: p.pendingAmount ?? 0,
  tbd: { ...p.tbd }
})
