import type { IoOrder, OrderDateMap } from './domain'

export function validOrder(p: IoOrder) {
  if (!isUuid(p.id)) throw new Error('invalid order uuid')
}

export function newOrder(p: IoOrder): IoOrder {
  validOrder(p)
  return p
}

export const defaultOrderDate = (): OrderDateMap => {
  const currDate = new Date()
  return {
    createdAt: currDate,
    updatedAt: currDate
  }
}
