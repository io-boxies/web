describe('increase stock count', async () => {
  test.concurrent('increase shop stock count', async () => {
    SHOP_PROD_DB.incrementStockCnt()
  })
  test.concurrent('increase vendor stock count', async () => {
    VENDOR_PROD_DB.incrementStockCnt()
  })
})

export {}
