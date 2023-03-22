import type { Unsubscribe } from '@firebase/util'

export enum API_SERVICE_EX {
  CAFE,
  ZIGZAG,
  EXCEL,
  ABLY,
  INNER
}
export type AnyOrder = { [k: string]: any }
export interface ExOrderRepo {
  getOrders(): AnyOrder[]
  getCancels(): AnyOrder[]
  forwardShipping(): AnyOrder[]
  forwardShipDone(): AnyOrder[]
}

export interface ApiToken {
  readonly dbId: string
  readonly clientId?: string
  readonly createdAt?: Date
  readonly updatedAt?: Date
  readonly expireAt?: Date
  readonly refreshExpireAt?: Date
  readonly mallId?: string
  readonly scopes?: string[]
  readonly service: API_SERVICE_EX
  readonly shopNo?: string
  readonly userId: string
  readonly alias: string
  readonly accessKey?: string
  readonly secretKey?: string
}
type EventOnTokens = (orders: ApiToken[]) => any

export interface LinkageDB {
  getTokensByIdListen(uid: string): {
    onTokens: EventOnTokens
    unsubscribe: Unsubscribe
  }
  deleteToken(uid: string, tokenDbId: string): Promise<void>
  createToken(token: ApiToken): Promise<void>
}

export interface ParseResultInfo {
  readonly service: API_SERVICE_EX
  readonly orderCnt: number
  readonly exist: number
  readonly invalid: number
}

export interface AblyOrderResp {
  readonly order_items: AblyOrderItem[]
  readonly current_page: number
  readonly default_delivery_sno: number
  readonly max_page_number: number
  readonly per_page: number
  readonly total_count: number
}

export interface AblyOrderItem {
  readonly goods_sno: number
  readonly goods_name: string
  readonly option_info: string
  readonly status: string
  readonly order_sno: number
  readonly sno: number
  readonly ordered_at: string
  readonly price: number
  readonly memo: string
  readonly buyer_email: string
  readonly delay_days: number
  readonly ea: number // FIXME: Check required num of orders
}
