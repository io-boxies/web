import type {
  CrudDB,
  DefrayParam,
  ShipmentVendor,
  PAID_INFO,
  PAY_METHOD,
  ShopVendorProd,
  IoUser,
  Locate
} from '..'

export enum ORDER_STATE {
  BEFORE_ORDER, // 주문전
  BEFORE_APPROVE, // 승인전
  BEFORE_PAYMENT, // 결제전
  BEFORE_READY, // 출고전
  BEFORE_PICKUP_REQ, // 픽업요청전
  BEFORE_APPROVE_PICKUP, // 픽업승인전
  BEFORE_ASSIGN_PICKUP, // 담당자배정전
  BEFORE_PICKUP, // 픽업전
  ONGOING_PICKUP, // 배송중
  PICKUP_COMPLETE, // 픽업완료
  BEFORE_SHIP, // 배송전
  SHIPPING, // 배송중
  SHIPPING_PENDING, // 배송대기
  SHIPPING_WAIT, // 배송보류
  SHIPPING_COMPLETE, // 배송완료
  RETURN_REQ, // 반품요청중
  RETURN_APPROVED, // 반품승인
  RETURN_DONE, // 반품완료
  REFUND, // 환불중
  REFUND_DONE, // 환불완료
  CHANGE, // 교환중
  CHANGE_DONE, // 교환완료
  CANCEL // 취소중
  // 거래종료
}
export type OrderDateMap = {
  [key in ORDER_STATE]?: Date
} & { createdAt?: Date; updatedAt?: Date; tossAt?: Date }

export enum ORDER_TYPE {
  STANDARD,
  RETURN
}
export enum REASON_TYPE {
  CHANGE_MIND,
  DELIVERY_DELAY,
  DELIVERY_ERROR,
  DELIVERY_AREA,
  CUSTOM_CLEARANCE,
  BAD_PACKAGING,
  PRODUCT_DISSATISFIED,
  PRODUCT_INFO,
  PRODUCT_DEFECTION,
  SERVICE_DISSATISFIED,
  SOLD_OUT,
  ETC
}

export interface Claim {
  readonly id: string
  readonly orderItemId: string
  readonly reqDate: Date
  readonly state: ORDER_STATE // 요청시 주문상태
  readonly reason: string // 클레임 상세 이유
  readonly type: REASON_TYPE // 클레임 이유 분류
  readonly done: boolean // 처리 완료여부
  readonly approved: boolean // 승인 여부
  readonly rejectReason: string
}

// export interface OrderExchange extends Claim {
//   exchangedDate?: Date // 교환 완료일
// }
export interface OrderCancel extends Claim {
  canceledDate?: Date // 취소 완료일
}

export interface PayAmount {
  tax: number // 주문건 생성시부과하여 지불되야할 금액 amount 에 더해진다
  paidAmount: number // 지불된 금액
  paid: PAID_INFO // 지불여부
  pureAmount: number // 순수 상품 금액 (로그용)
  amount: number // 주문 요청 금액
  paymentConfirm: boolean
  paymentMethod?: PAY_METHOD
  paidAt?: Date
  discountAmount: number
  pendingAmount: number
  isPending: boolean // 보류 금액으로 채워진 상태인지.
}
export interface OrderItem {
  readonly od: OrderDateMap
  readonly id: string
  readonly orderDbId: string

  readonly orderCnt: number
  readonly activeCnt: number
  readonly pendingCnt: number

  readonly prod: ShopVendorProd
  readonly vendor: IoUser
  readonly shipManagerId?: string
  readonly prodType: string

  readonly prodAmount: PayAmount
  readonly pickAmount: PayAmount
  readonly shipAmount: PayAmount
}

export interface IoOrder {
  readonly id: string
  readonly items: OrderItem[]
  readonly shop: IoUser
  readonly uncle?: IoUser

  readonly ship?: ShipmentVendor
  readonly isDone?: boolean
  readonly isDirectToShip: boolean // direct to uncle
  readonly destination: 'storage-shop' | 'client-home' | 'storage-vendor' | 'io-storage-ko-guro-1'

  readonly orderType: ORDER_TYPE
  readonly beforeStates?: ORDER_STATE[]
  readonly state: ORDER_STATE
  readonly cancellations?: OrderCancel[]
}
/**
 * --- NEW FLOW ---
 * 현재는 주문취합으로 부터 들어온 주문들을 바로 주문데이터로 만들지만,
 * 이렇게되면 중복된 아이템들이 분리되서 들어오게된다
 * external IoOrder -> inner IoOrder
 * 하지만 아래 과정을 거침으로서, 취합한 아이템들을 모아서 주문을 생성한다.
 * (API | Excel Order) -> (create)OrderCollect && (create and merge)CollectItem
 * -> (create)IoOrder
 * */
export interface OrderCollect {
  // used existOrderIds
  readonly exOrderId: string // user id -> db id
  readonly collectedAt: Date
  readonly order: IoOrder
  // 주문 또는 삭제? 되어 비활성화 되는 여부 default: false
  readonly isDone: boolean
  readonly raw: any // raw external order(ably, zigzag, etc... )

  clientLocate: Locate
}
export interface CollectItem {
  // db id: user id ->  shop prod id
  readonly product: ShopVendorProd
  readonly cnt: number
}

type EventOnOrder = (orders: IoOrder[]) => any
export interface OrderDB extends CrudDB<IoOrder> {
  /**
   * 이미 주문 취합/생성이 완료된 외부 주문번호 ID
   */
  getExistOrderIds(shopId: string): Promise<Set<string>>
  /**
   * 소매 -> 도매 주문 요청
   */
  request(orderDbIds: string[]): Promise<void>
  /**
   * 도매처측 주문 승인
   */
  approve(orderDbIds: string[]): Promise<void>
  /**
   * 도매처측 주문 거절
   */
  reject(orderDbIds: string[]): Promise<void>
  /**
   * 도매처측 지불 완료 확인
   */
  completePay(orderDbIds: string[], param: { [itemId: string]: DefrayParam }): Promise<void>
  /**
   * 도매처측 미송건 출고준비 완료 처리
   */
  toReady(orderDbIds: string[]): Promise<void>

  /**
   * 소매 -> 엉클 픽업요청
   */
  pickupRequest(orderDbIds: string[], isDirect: boolean): Promise<any>
  /**
   * 엉클측 픽업 거절
   */
  pickupReject(orderDbIds: string[]): Promise<void>
  /**
   * 엉클측 픽업 승인
   */
  pickupApprove(orderDbIds: string[]): Promise<void>
  /**
   * 소매측 배송 수령 확인
   */
  shipReceived(orderDbIds: string[]): Promise<void>
  /**
   * 주문 완료처리
   */
  done(orderDbIds: string[]): Promise<void>

  /**
   * 소매 -> 도매 반품 요청
   */
  returnReq(orderDbIds: string[]): Promise<void>
  /**
   * 도매측 반품 승인
   */
  returnApprove(orderDbIds: string[]): Promise<void>
  /**
   * 도매측 반품 거절
   */
  returnReject(orderDbIds: string[]): Promise<void>
  /**
   * 도매측 반품 완료
   */
  returnDone(orderDbIds: string[]): Promise<void>

  /**
   * 소매 -> 도매 취소 요청
   */
  cancelReq(orderDbId: string, claim: OrderCancel, cancelCnt: number): Promise<void>
  /**
   * 도매측 취소 승인
   */
  cancelApprove(orderDbIds: string[]): Promise<void>
  /**
   * 도매측 취소 거절
   */
  cancelReject(orderDbIds: string[]): Promise<void>

  shopReadListen(p: { inStates?: ORDER_STATE[]; shopId: string; onOrders: EventOnOrder }): {
    unsubscribe: () => void
  }
  vendorReadListen(p: { inStates?: ORDER_STATE[]; vendorId: string; onOrders: EventOnOrder }): {
    unsubscribe: () => void
  }
  uncleReadListen(p: { inStates?: ORDER_STATE[]; uncleId: string; onOrders: EventOnOrder }): {
    unsubscribe: () => void
  }
}
