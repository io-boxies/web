export enum LocateType {
  SHOP, // 사무실
  STORAGE, //매장
  ETC //기타
}
export interface Locate {
  readonly code?: string
  readonly alias: string
  readonly latitude?: number // 위도
  readonly longitude?: number // 경도
  readonly detailLocate?: string
  readonly firstName?: string
  readonly lastName?: string
  readonly phone?: string
  readonly postalCode?: string
  readonly country: string
  readonly city?: string
  readonly county?: string
  readonly town?: string
  readonly locateType: LocateType
}

export function locateStr(l: Locate) {
  return `도시: ${l.city}, 우편번호: ${l.postalCode}, 상세주소: ${l.detailLocate}, 받는분: ${
    l.firstName! + l.lastName
  }, 핸드폰번호: ${l.phone}`
}
export enum SHIP_METHOD {
  UNCLE,
  SHIP,
  NO_SHIP
}

export interface ShipDoneInfo {
  readonly photos: string[]
  readonly memo: string
}
// vendor -> shop shipment
export interface ShipmentVendor {
  readonly shippingId: string
  readonly orderDbId: string
  readonly managerId: string // 엉클관리자 아이디
  readonly uncleId?: string // 엉클근로자 아이디, 토스시 변경가능
  readonly trackingNo?: string //송장번호
  readonly shipMethod: SHIP_METHOD
  readonly additionalInfo: string
  readonly paid: boolean
  readonly weightUnit?: string
  readonly weight?: number
  readonly sizeUnit?: string
  readonly size?: number
  readonly amountBySize?: number
  readonly amountByWeight?: number
  readonly shipFee: number
  readonly pickupFee: number
  readonly returnAddress: Locate
  readonly startAddress: Locate
  readonly receiveAddress: Locate
  readonly wishedDeliveryTime: Date
  readonly doneInfo?: ShipDoneInfo
}
// shop -> client shipment
export interface ShipmentClient {}
