import type { IoUser } from '@/utils/auth/domain'
import type { CU_DATE } from '../../common'

export interface Product extends CU_DATE {
  readonly vendorProdId: string
  readonly description?: string
  readonly ctgr: string[]
}
export type UserProduct<T extends Product> = T & IoUser
export type VISIBILITY = (typeof VISIBILITY)[keyof typeof VISIBILITY]
export const VISIBILITY = Object.freeze({
  NO: 'NO',
  ME: 'ME',
  GLOBAL: 'GLOBAL'
})
/**
 * (의류) 블루 + XL + 여성전용 드레스
 * (콜라) 제로 + 300ML + 24개
 * (한우) A+ + 300g + 퀵배송
 */
export interface ProdOption {
  readonly addedPrice: number
  readonly label: string[]
  readonly optId: string
  stockCnt: number
}
export type ProdOptionObj = {
  [k: string]: ProdOption[] | { [k: string]: ProdOption[] }
}

/**
 * 논리적 상품의 결합으로 클라이언트에게 상품 보여주기위한 구조
 * 각 상품의 옵션들과 그에 대한 가격을 보여줄 수 있다.
 */
export interface ProductPkg {
  readonly pkgId: string
  readonly options: ProdOptionObj
}

export const EX_SERVICE = {
  CAFE: 'cafe24',
  ZIGZAG: 'zigzag',
  EXCEL: 'excel',
  ABLY: 'ably'
} as const
type EX_SERVICE = (typeof EX_SERVICE)[keyof typeof EX_SERVICE]

export const GENDER = Object.freeze({
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  UNISEX: 'UNISEX',
  KIDS: 'KIDS',
  NONE: 'NONE'
})
export type GENDER = (typeof GENDER)[keyof typeof GENDER]
