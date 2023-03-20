import type { UserCredential } from '@firebase/auth'
import type { OutputData } from '@editorjs/editorjs/types/data-formats'
import type { IoAccount } from '../payment'
import type { CrudDB, Locate, SHIP_METHOD } from '../common'
import type { SexType } from '@faker-js/faker'
import type { IO_LOCALE } from '..'

export interface FcmToken {
  readonly createdAt: Date
  readonly token: string
}

export enum USER_ROLE {
  SHOP,
  VENDOR,
  UNCLE,
  ADMIN,
  ANONYMOUSE,
  UNCLE_WORKER
}

export enum USER_PROVIDER {
  EMAIL,
  KAKAO,
  GOOGLE
}

export enum SALE_MANAGE {
  HAND_WRITE, // 수기
  ONLINE // 포스&온라인
}
export interface ShopOperInfo {
  readonly saleAverage: string // (10~300 / 300~1000 / 1000 ~5000 / 5000 ~ 10,000 / 10,000 ~ )
  readonly purchaseMethod: SHIP_METHOD // 현재 동대문 사입방식
}
export interface VendorOperInfo {
  readonly autoOrderApprove: boolean // 모든주문 자동승인
  readonly saleManageType: string // 현재 장기 종류 (수기, 포스&온라인)
  readonly taxDeadlineDay: number // 세금계산서 마감일
  readonly expectNumProdMonthly: string
}

export interface IoUserInfo {
  readonly createdAt?: Date
  readonly updatedAt?: Date
  readonly userId: string
  readonly providerId: USER_PROVIDER | Extract<keyof USER_PROVIDER, string>
  readonly userName: string
  readonly displayName?: string
  readonly account?: IoAccount // 입출금 계좌
  readonly email?: string
  readonly emailVerified: boolean
  readonly profileImg?: string
  readonly role: USER_ROLE
  readonly fcmTokens: FcmToken[]
  readonly passed: boolean // 관리자(주네)에게 허가받은 사용자 인지
  readonly phone?: string
  readonly managerId?: string // 관리자 ID 근로자일경우 not null
  readonly workerIds?: string[] // 근로자 ID목록 관리자일경우 not null
  readonly uncleId?: string // 엉클이 아닌 유저의 계약 엉클 아이디
  readonly sex: SexType
}
export interface CompanyInfo {
  readonly companyName: string // 상호명
  readonly companyNo: string // 사업자등록번호
  readonly companyCertificate: string[] // 사업자 등록증 사진
  readonly locations: Locate[]
  readonly shipLocate?: Locate
  readonly emailTax: string // 세금 계산서 이메일 주소
  readonly companyPhone: string // 사업장 연락처
  readonly shopLink?: string
  readonly ceoName: string
  readonly ceoPhone: string
  readonly managerName: string
  readonly managerPhone: string
}
export interface LocateAmount {
  readonly locate: Locate
  readonly amount: number
}
export interface UncleInfo {
  readonly pickupLocates: LocateAmount[]
  readonly shipLocates: LocateAmount[]
  readonly amountBySize: { [unit: string]: number }
  readonly amountByWeight: { [unit: string]: number }
  readonly shipPendingAmount: number
}
export interface ShopInfo {
  readonly uncleUserIds: string[]
}

export enum SalaryMethod {
  CHANGE_MIND
}
export enum FormOfEmployee {
  PART_TIME,
  FULL_TIME
}
export interface WorkerInfo {
  readonly areaInCharges: Location[]
  readonly formOfEmp: FormOfEmployee
  readonly payday: number
  readonly empContract: string[]
}

export interface IoUser {
  readonly userInfo: IoUserInfo
  readonly companyInfo?: CompanyInfo
  readonly operInfo?: ShopOperInfo | VendorOperInfo
  readonly uncleInfo?: UncleInfo // uncle manager info
  readonly preferDark?: boolean
  readonly locale: IO_LOCALE
  readonly shopInfo?: ShopInfo
  readonly workerInfo?: WorkerInfo
  readonly workState?: string
  readonly connectState?: string
  readonly orderMemo?: OutputData
}
export type UserFields = CompanyInfo & IoUserInfo & ShopOperInfo & VendorOperInfo
export interface UserDB extends CrudDB<IoUser> {
  get(uid: string, okVirtual?: boolean): Promise<{ data?: IoUser }>
  getUsersByRole(role: USER_ROLE): Promise<IoUser[]>
  ioSignUpCredential(uc: UserCredential, name: string, role: USER_ROLE): Promise<IoUser>
}
