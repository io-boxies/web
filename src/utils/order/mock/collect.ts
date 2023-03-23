import { v4 } from 'uuid'
import type { CollectItem, OrderCollect } from '../domain'

export function mockOrderCollect(): OrderCollect {
  const order = mockOrder()
  const locate = mockLocate()
  return {
    exOrderId: v4(),
    collectedAt: fk.date.past(),
    order,
    isDone: false,
    userRequirements: fk.lorem.paragraph(),
    provider: fk.helpers.arrayElement(enumToArr(API_SERVICE_EX)),
    shipClientMsg: fk.lorem.paragraph(),
    raw: {},
    clientLocate: locate
  }
}
export function mockCollectItem(): CollectItem {
  return {
    product: mockShopVendorProd()[0],
    items: mockOrderItems('123132')
  }
}
