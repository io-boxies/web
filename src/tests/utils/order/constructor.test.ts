describe('order validation test ', () => {
  test.todo('order from collect items')

  test.concurrent('invalidate order', async () => {
    const ordInvalid = Object.assign(mockOrder(), { id: '213123' })
    expect(() => validOrder(ordInvalid)).toThrow('invalid order uuid')
  })

  test.concurrent('invalidate shipment', async () => {
    const ord = mockOrder()
    const uncle = getMockUncles()[0]
    const ship = Object.assign(
      mockShipment({ orderDbId: ord.id, managerId: uncle.userInfo.userId }),
      { shippingId: '213123' }
    )
    expect(() => validShipment(ship)).toThrow(new Error('invalid uuid'))
  })

  test.concurrent.fails('validate valid order', () => {
    const ordValid = mockOrder()
    expect(() => validOrder(ordValid)).toThrow('invalid order uuid')
  })
})

describe.todo('order vendor process', () => {
  test.todo('request order BEFORE_APPROVE')
  test.todo('approve order BEFORE_PAYMENT')
  test.todo('reject order REJECTED')
})
describe.todo('order direct process', () => {
  test.todo('request direct to uncle')
})

export {}
