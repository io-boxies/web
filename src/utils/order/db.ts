import type { PaginateParam } from '../common'
import type { DefrayParam } from '../payment'
import type {
  CollectItem,
  CollectItemDB,
  IoOrder,
  OrderCancel,
  OrderCollect,
  OrderCollectDB,
  OrderDB,
  ORDER_STATE
} from './domain'

export const ORDER_DB: OrderDB = {
  getExistOrderIds: function (shopId: string): Promise<Set<string>> {
    throw new Error('Function not implemented.')
  },
  request: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  approve: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  reject: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  completePay: function (
    orderDbIds: string[],
    param: { [itemId: string]: DefrayParam }
  ): Promise<void> {
    throw new Error('Function not implemented.')
  },
  toReady: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  pickupRequest: function (orderDbIds: string[], isDirect: boolean): Promise<any> {
    throw new Error('Function not implemented.')
  },
  pickupReject: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  pickupApprove: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  shipReceived: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  done: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  returnReq: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  returnApprove: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  returnReject: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  returnDone: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  cancelReq: function (orderDbId: string, claim: OrderCancel, cancelCnt: number): Promise<void> {
    throw new Error('Function not implemented.')
  },
  cancelApprove: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  cancelReject: function (orderDbIds: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  shopReadListen: function (p: {
    inStates?: ORDER_STATE[] | undefined
    shopId: string
    onOrders: (orders: IoOrder[]) => any
  }): { unsubscribe: () => void } {
    throw new Error('Function not implemented.')
  },
  vendorReadListen: function (p: {
    inStates?: ORDER_STATE[] | undefined
    vendorId: string
    onOrders: (orders: IoOrder[]) => any
  }): { unsubscribe: () => void } {
    throw new Error('Function not implemented.')
  },
  uncleReadListen: function (p: {
    inStates?: ORDER_STATE[] | undefined
    uncleId: string
    onOrders: (orders: IoOrder[]) => any
  }): { unsubscribe: () => void } {
    throw new Error('Function not implemented.')
  },
  batchCreate: function (userId: string, args: IoOrder[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  create: function (userId: string, arg: IoOrder[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  get: function (uid: string): Promise<{ data?: IoOrder | undefined }> {
    throw new Error('Function not implemented.')
  },
  list: function (d: PaginateParam<IoOrder>): Promise<{ data: IoOrder[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  listByIds: function (ids: string[]): Promise<IoOrder[]> {
    throw new Error('Function not implemented.')
  },
  update: function (arg: IoOrder): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchUpdate: function (args: IoOrder[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  delete: function (uid: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchDelete: function (userId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
export const ORDER_COLLECT_DB: OrderCollectDB = {
  batchCreate: function (userId: string, args: OrderCollect[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  create: function (userId: string, arg: OrderCollect[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  get: function (uid: string): Promise<{ data?: OrderCollect | undefined }> {
    throw new Error('Function not implemented.')
  },
  list: function (
    d: PaginateParam<OrderCollect>
  ): Promise<{ data: OrderCollect[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  listByIds: function (ids: string[]): Promise<OrderCollect[]> {
    throw new Error('Function not implemented.')
  },
  delete: function (uid: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchDelete: function (userId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
export const COLLECT_ITEM_DB: CollectItemDB = {
  batchCreate: function (userId: string, args: CollectItem[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  create: function (userId: string, arg: CollectItem[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  get: function (uid: string): Promise<{ data?: CollectItem | undefined }> {
    throw new Error('Function not implemented.')
  },
  list: function (
    d: PaginateParam<CollectItem>
  ): Promise<{ data: CollectItem[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  listByIds: function (ids: string[]): Promise<CollectItem[]> {
    throw new Error('Function not implemented.')
  },
  update: function (arg: CollectItem): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchUpdate: function (args: CollectItem[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  delete: function (uid: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchDelete: function (userId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
