import { describe, test, expect } from 'vitest'
import { getMockUncles, mockOrder, mockShipment, validOrder } from '../../../utils'
describe('order constructor test ', () => {
  test('invalidate order', async () => {
    const ordInvalid = Object.assign(mockOrder(), { id: '213123' })
    expect(() => validOrder(ordInvalid)).toThrow('invalid order uuid')
  })

  test('invalidate shipment', async () => {
    const ord = mockOrder()
    const uncle = getMockUncles()[0]
    const ship = Object.assign(
      mockShipment({ orderDbId: ord.id, managerId: uncle.userInfo.userId }),
      { shippingId: '213123' }
    )
    expect(() => validShipment(ship)).toThrow(new Error('invalid uuid'))
  })

  test.fails('validate valid order', () => {
    const ordValid = mockOrder()
    expect(() => validOrder(ordValid)).toThrow('invalid order uuid')
  })
})
