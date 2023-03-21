import type { IoOrder, OrderDateMap } from './domain'
import type { ShipmentVendor } from '../common'

export function validOrder(p: IoOrder) {
  if (!isUuid(p.id)) throw new Error('invalid order uuid')
}
export function validShipment(p: ShipmentVendor) {
  if (!isUuid(p.orderDbId) || !isUuid(p.shippingId)) throw new Error('invalid uuid')
}

export function newOrder(p: IoOrder): IoOrder {
  validOrder(p)
  return p
}

export function newShipment(p: ShipmentVendor) {
  validShipment(p)
  return p
}

export const defaultOrderDate = (): OrderDateMap => {
  const currDate = new Date()
  return {
    createdAt: currDate,
    updatedAt: currDate
  }
}
