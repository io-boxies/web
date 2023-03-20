import {
  type ShipmentVendor,
  mockLocate,
  newPayAmount,
  getMockShops,
  SHIP_METHOD,
  ORDER_STATE,
  mockShopVendorProd,
  getMockVendors,
  enumToArr
} from '@/utils'
import { defaultOrderDate, ORDER_TYPE, type IoOrder, type OrderItem } from '..'

export function mockShipment(p: {
  orderDbId: string
  managerId: string
  uncleId?: string
  trackingNo?: string
}): ShipmentVendor {
  // const weight = fk.datatype.number({ max: 100 })
  return {
    shippingId: fk.datatype.uuid(),
    orderDbId: p.orderDbId,
    managerId: p.managerId,
    uncleId: p.uncleId,
    trackingNo: p.trackingNo,
    shipMethod: fk.helpers.arrayElement([SHIP_METHOD.NO_SHIP, SHIP_METHOD.SHIP, SHIP_METHOD.UNCLE]),
    additionalInfo: fk.commerce.productDescription(),
    paid: fk.datatype.boolean(),
    // weightUnit: `${weight} kg`,
    // weight: weight,
    // sizeUnit: `${weight} kg`,
    // size: weight,
    // amountBySize: weight,
    // amountByWeight: weight,
    shipFee: parseInt(fk.commerce.price()),
    pickupFee: parseInt(fk.commerce.price()),
    returnAddress: mockLocate(),
    startAddress: mockLocate(),
    receiveAddress: mockLocate(),
    wishedDeliveryTime: fk.date.soon()
  }
}

export function mockOrder(o?: Partial<IoOrder>): IoOrder {
  const id = fk.datatype.uuid()
  return Object.assign(
    {
      id,
      items: mockOrderItems(id),
      shop: getMockShops()[0],
      state: fk.helpers.arrayElement(enumToArr(ORDER_STATE)),
      orderType: fk.helpers.arrayElement(enumToArr(ORDER_TYPE)),
      isDirectToShip: fk.datatype.boolean(),
      destination: fk.helpers.arrayElement([
        'storage-shop',
        'client-home',
        'storage-vendor',
        'io-storage-ko-guro-1'
      ])
    },
    o
  )
}

export function mockOrderItems(orderDbId: string): OrderItem[] {
  const amount = newPayAmount({})
  return new Array(fk.datatype.number({ max: 50 })).map(() => {
    return {
      od: defaultOrderDate(),
      id: fk.datatype.uuid(),
      orderDbId: orderDbId,

      orderCnt: fk.datatype.number({ max: 300 }),
      activeCnt: fk.datatype.number({ max: 300 }),
      pendingCnt: fk.datatype.number({ max: 300 }),

      prod: mockShopVendorProd()[0],
      vendor: getMockVendors()[0],
      cancellations: [],
      prodType: fk.commerce.product(),

      prodAmount: amount,
      shipAmount: amount,
      pickAmount: amount
    }
  })
}
