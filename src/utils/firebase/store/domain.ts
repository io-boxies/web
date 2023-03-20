export enum IoCollection {
  USER,
  IO_PAY,
  PAY_HISTORY,
  MAPPER,
  VENDOR_PROD,
  SHOP_PROD,
  ORDER_PROD,
  ORDER_PROD_NUMBER,
  USER_LOG,
  TOKENS,
  SHIPMENT,
  PICKUP_LOCATES,
  CS_POST,
  TEST,
  VIRTUAL_VENDOR_PROD,
  VIRTUAL_ORDER_PROD,
  VIRTUAL_USER,
  REQUEST_ENCASH,
  REQUEST_CHARGE
}

export interface getCollectParam {
  readonly c: IoCollection
  readonly uid?: string
  readonly shopProdId?: string
  readonly vendorProdId?: string
  readonly orderId?: string
}
