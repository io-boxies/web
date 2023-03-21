import type { Product, ProdOptionObj } from '.'
import type { OutputData } from '@editorjs/editorjs'
import type { VISIBILITY, ProdOption, GENDER, UserProduct } from './common'
import type { CrudDB, PaginateParam } from '@/utils'
import type { Unsubscribe } from 'firebase/firestore'

export interface ShopProduct extends Product {
  readonly shopProdId: string
  readonly prodName: string
  readonly stockCnt: number
  readonly option: ProdOption // size color kg num_of_entity
}
export class ShopVendorProd {
  readonly sProd: ShopProduct
  readonly vProd: VendorProduct
  constructor(shopProd: ShopProduct, vendorProd: VendorProduct) {
    if (shopProd.vendorProdId !== vendorProd.vendorProdId) {
      throw new Error('product not matched pk')
    }
    this.sProd = shopProd
    this.vProd = vendorProd
  }
}
/**
 * 옷일경우 에만 채워지는 옵션
 */
interface GarmentInfo {}
/**
 * 식품일경우 에만 채워지는 옵션
 */
interface GroceryInfo {}
export interface VendorProduct extends Product {
  readonly gender: GENDER
  readonly vendorId: string
  readonly info: string | OutputData
  readonly prodType: string
  readonly visible: VISIBILITY
  readonly vendorPrice: number
  readonly primeCost: number
  readonly soldOut: boolean
  readonly replacePriceText: string
  readonly vendorProdName: string
  readonly titleImgs: string[]
  readonly bodyImgs: string[]
  readonly TBD: { [k: string]: any }
  readonly options: ProdOption[] // size color kg num_of_entity
  readonly minimumOrderQuantity: number
  readonly maximumOrderQuantity: number
  readonly allowPending: boolean
  readonly fabric: string
  readonly madeBy: string
  readonly garmentInfo?: GarmentInfo
  readonly groceryInfo?: GroceryInfo
}
export interface VendorProdSimilar {
  readonly vendorId: string
  readonly vendorProdName: string
}

// >>>>> DB >>>>>

type VUP = UserProduct<VendorProduct>
type SUP = UserProduct<ShopProduct>
export interface VendorProductDB extends CrudDB<VendorProduct> {
  /**
   * @example
   * ```ts
   * ["garment", "grocery", "electronic", "kimchi", "chairs"];
   * ```
   */
  getProdTypes(): string[]
  getOptions(prodType: string): ProdOptionObj
  getByIdWithUser(vendorProdId: string): Promise<VUP | null>
  listByIdsWithUser(ids: string[]): Promise<VUP[]>
  listByVendorIds(vendorIds: string[]): Promise<VUP[]>
  listWithUser(d: PaginateParam<VUP>): Promise<{
    data: VUP[]
    noMore: boolean
  }>
  updateSimilarProd(d: VendorProdSimilar, data: { [k: string]: any }): Promise<void>
  incrementStockCnt(optId: string, prod: VendorProduct, cnt: number): Promise<VendorProduct>
}

export interface ShopProductDB extends CrudDB<ShopProduct> {
  getShopGarments(d: { shopId?: string; vendorId?: string }): Promise<ShopProduct[]>
  shopGarmentExist(vendorProdId: string, shopUserId: string): Promise<boolean>
  exist(uid: string): Promise<boolean>
  useGetShopGarments(shopId: string): {
    onProducts: (data: ShopProduct[]) => void
    unsubscribe: Unsubscribe
  }
  deleteShopGarments(shopId: string, uids: string[]): Promise<void>
  getBatchShopProds(shopIds: string[]): Promise<SUP[]>
  listByIds(uids: string[]): Promise<ShopProduct[]>
  getById(uid: string): Promise<ShopProduct | null>
  incrementStockCnt(prod: ShopProduct, cnt: number): Promise<number>
}
// <<<<< DB <<<<<
