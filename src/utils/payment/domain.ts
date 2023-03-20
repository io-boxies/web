export enum PAY_METHOD {
  CASH,
  DEPOSIT
}

export type IO_BANKS = keyof typeof IO_BANKS
export const IO_BANKS = Object.freeze({
  한국은행: '001',
  산업은행: '002',
  기업은행: '003',
  국민은행: '004',
  외환은행: '005',
  수협은행: '007',
  수출입은행: '008',
  농협은행: '011',
  농협회원조합: '012',
  우리은행: '020',
  SC제일은행: '023',
  서울은행: '026',
  한국씨티은행: '027',
  대구은행: '031',
  부산은행: '032',
  광주은행: '034',
  제주은행: '035',
  전북은행: '037',
  경남은행: '039',
  새마을금고연합회: '045',
  신협중앙회: '048',
  상호저축은행: '050',
  외국계은행: '051',
  모건스탠리은행: '052',
  HSBC은행: '054',
  도이치은행: '055',
  알비에스피엘씨은행: '056',
  제이피모간체이스은행: '057',
  미즈호코퍼레이트은행: '058',
  미쓰비시도쿄UFJ은행: '059',
  BOA: '060',
  비엔피파리바은행: '061',
  중국공상은행: '062',
  중국은행: '063',
  산림조합: '064',
  대화은행: '065',
  우체국: '071',
  신용보증기금: '076',
  기술신용보증기금: '077',
  하나은행: '081',
  신한은행: '088',
  케이뱅크: '089',
  카카오뱅크: '090',
  토스뱅크: '092',
  한국주택금융공사: '093',
  서울보증보험: '094',
  경찰청: '095',
  금융결제원: '099',
  동양종합금융증권: '209',
  현대증권: '218',
  미래에셋증권: '230',
  대우증권: '238',
  삼성증권: '240',
  한국투자증권: '243',
  NH투자증권: '247',
  교보증권: '261',
  하이투자증권: '262',
  에이치엠씨투자증권: '263',
  키움증권: '264',
  이트레이드증권: '265',
  SK증권: '266',
  대신증권: '267',
  솔로몬투자증권: '268',
  한화증권: '269',
  하나대투증권: '270',
  신한금융투자: '278',
  동부증권: '279',
  유진투자증권: '280',
  메리츠증권: '287',
  엔에이치투자증권: '289',
  부국증권: '290',
  신영증권: '291',
  엘아이지투자증권: '292'
})

export interface PaymentDB {
  getIoPayByUser(uid: string): Promise<IoPay>
  getIoPayByUserListen(
    uid: string,
    onUserPay: (pay: IoPay) => void
  ): {
    unsubscribe: () => void
  }
  getIoPaysListen(onUserPay: (pay: IoPay[]) => void): {
    unsubscribe: () => void
  }
  addPayHistory(h: PayHistory): Promise<void>
  updatePay(
    target: IoPay,
    p: {
      histState: PAY_HIST_STATE
      addedBudget: number
      addedPendingBudget: number
    }
  ): Promise<void>
}

export interface IoPay {
  readonly createdAt?: Date
  readonly updatedAt?: Date
  readonly userId: string
  readonly budget: number
  readonly pendingBudget: number
}
export type PAY_HIST_STATE = keyof typeof PAY_HIST_STATE

export const PAY_HIST_STATE = Object.freeze({
  CHARGE: '충전',
  WITH_DRAW: '인출',
  USE: '사용',
  ADMIN_MODIFY: '관리자수정',
  ORDER_GARMENT: '도매처주문',
  ORDER_GARMENT_FEE: '도매처주문이용료',
  ORDER_APPROVE: '도매처주문승인',
  ORDER_APPROVE_FEE: '도매처주문승인이용료',
  ORDER_REJECT: '도매처주문거절',
  APPROVE_PICKUP: '픽업승인',
  REJECT_PICKUP: '픽업거절',
  RETURN_PICKUP_AMOUNT: '픽업반환금액',
  APPROVE_PICKUP_FEE: '픽업승인이용료',
  REQUEST_PICKUP: '픽업요청',
  ORDER_DONE: '주문완료'
})

export interface PayHistory {
  readonly createdAt?: Date
  readonly userId: string
  readonly amount: number // 변동 보류 금액량
  readonly pendingAmount: number // 변동 보류 금액량
  readonly state: PAY_HIST_STATE
  readonly tbd: { [k: string]: any }
}

export interface ReqEncash {
  readonly dbId: string
  readonly createdAt: Date
  readonly approvedAt?: Date
  readonly rejectedAt?: Date
  readonly isDone: boolean
  readonly result?: 'approve' | 'rejected'
  readonly adminMemo?: string
  readonly amount: number
  readonly userId: string
}

export interface DefrayParam {
  readonly paidAmount: number
  readonly tax: number
  readonly payMethod: PAY_METHOD
}

export interface IoAccount {
  readonly accountName: string
  readonly accountNumber: string
  readonly bank: IO_BANKS
  readonly code: string
}

export enum PAID_INFO {
  OVERCOME,
  CREDIT,
  EXACT,
  NO
}
