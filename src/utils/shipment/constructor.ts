import type { ShipmentVendor } from '../common'

export function validShipment(p: ShipmentVendor) {
  if (!isUuid(p.orderDbId) || !isUuid(p.shippingId)) throw new Error('invalid uuid')
}

export function newShipment(p: ShipmentVendor) {
  validShipment(p)
  return p
}
