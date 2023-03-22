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

  test.todo('duplicate order number test')
  test.todo('merge exist collect item test')

  test.concurrent.fails('validate valid order', () => {
    const ordValid = mockOrder()
    expect(() => validOrder(ordValid)).toThrow('invalid order uuid')
  })
})

export {}
