describe('increase stock count', async () => {
  test.concurrent('increase shop stock count', async () => {
    const prod = mockShopProds()[0]
    await setDoc(
      doc(
        getIoCollection(IoFireApp.getInst().store, { c: IoCollection.SHOP_PROD }),
        prod.shopProdId
      ),
      prod
    )

    const cnt = fk.datatype.number({ min: 1000, max: 1000 })
    const result = await SHOP_PROD_DB.incrementStockCnt(prod, cnt)
    expect(result).toBe(prod.stockCnt + cnt)
  })
  test.concurrent('increase vendor stock count', async () => {
    const prod = mockVendorProds()[0]
    const optId = prod.options[0].optId
    const optStockCnt = prod.options[0].stockCnt
    await setDoc(
      doc(
        getIoCollection(IoFireApp.getInst().store, { c: IoCollection.VENDOR_PROD }),
        prod.vendorProdId
      ),
      prod
    )

    const cnt = fk.datatype.number({ min: 1000, max: 1000 })
    const newProd = await VENDOR_PROD_DB.incrementStockCnt(optId, prod, cnt)
    const newOpt = newProd.options.find((x) => x.optId === optId)!
    expect(newOpt.stockCnt).toBe(optStockCnt + cnt)
  })
})

export {}
