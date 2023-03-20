describe('mockup data', async () => {
  test.concurrent('user role  test', () => {
    const uncles = getMockUncles()
    uncles.forEach((u) => expect(u.userInfo.role).eq(USER_ROLE.UNCLE))

    const vendors = getMockVendors()
    vendors.forEach((u) => expect(u.userInfo.role).eq(USER_ROLE.VENDOR))

    const shops = getMockShops()
    shops.forEach((u) => expect(u.userInfo.role).eq(USER_ROLE.SHOP))

    const workers = mockWorkers()
    workers.forEach((u) => expect(u.userInfo.role).eq(USER_ROLE.UNCLE_WORKER))
  })
  test.concurrent('order test', () => {
    const order = newOrder(mockOrder())
    expect(order.id.length).greaterThan(5)
    // expect(order.items.length).greaterThan(0)
  })
  test.concurrent('shipment test', () => {
    const order = newOrder(mockOrder())
    const uncle = getMockUncles()[0]
    const ship = newShipment(
      mockShipment({
        orderDbId: order.id,
        managerId: uncle.userInfo.userId
      })
    )
    expect(order.id).equal(ship.orderDbId)
  })
})
export {}
