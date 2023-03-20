import type { IoUser } from '@/utils/auth'
import type { PaginateParam } from '@/utils/common'
import type {
  VendorProductDB,
  VendorProduct,
  VendorProdSimilar,
  ProdOptionObj,
  ShopProductDB,
  ShopProduct
} from '../domain'

// } from '..'
export const VENDOR_PROD_DB: VendorProductDB = {
  getByIdWithUser: function (vendorProdId: string): Promise<(VendorProduct & IoUser) | null> {
    throw new Error('Function not implemented.')
  },
  listByIdsWithUser: function (ids: string[]): Promise<(VendorProduct & IoUser)[]> {
    throw new Error('Function not implemented.')
  },
  listByVendorIds: function (vendorIds: string[]): Promise<(VendorProduct & IoUser)[]> {
    throw new Error('Function not implemented.')
  },
  listWithUser: function (
    d: PaginateParam<VendorProduct & IoUser>
  ): Promise<{ data: (VendorProduct & IoUser)[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  updateSimilarProd: function (d: VendorProdSimilar, data: { [k: string]: any }): Promise<void> {
    throw new Error('Function not implemented.')
  },
  getProdTypes: function (): string[] {
    throw new Error('Function not implemented.')
  },
  getOptions: function (prodType: string): ProdOptionObj {
    throw new Error('Function not implemented.')
  },
  incrementStockCnt: async function (optId, prod, cnt) {
    const docRef = doc(
      getIoCollection<VendorProduct>(IoFireApp.getInst().store, { c: IoCollection.VENDOR_PROD }),
      prod.vendorProdId
    )
    const data = (await getDoc(docRef)).data()
    if (!data) throw new Error(`no data ${prod.vendorProdId + prod.vendorProdName}`)
    const targetOptIdx = data.option.findIndex((opt) => opt.optId === optId)
    if (targetOptIdx === -1) throw new Error(`no option ${optId}`)
    data.option[targetOptIdx].stockCnt += cnt
    await updateDoc(docRef, { option: data.option })
    return data
  },
  batchCreate: function (userId: string, args: VendorProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  create: function (userId: string, arg: VendorProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  get: function (uid: string): Promise<{ data?: VendorProduct | undefined }> {
    throw new Error('Function not implemented.')
  },
  list: function (
    d: PaginateParam<VendorProduct>
  ): Promise<{ data: VendorProduct[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  listByIds: function (ids: string[]): Promise<VendorProduct[]> {
    throw new Error('Function not implemented.')
  },
  update: function (arg: VendorProduct): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchUpdate: function (args: VendorProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  delete: function (uid: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchDelete: function (userId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
export const SHOP_PROD_DB: ShopProductDB = {
  getShopGarments: function (d): Promise<ShopProduct[]> {
    throw new Error('Function not implemented.')
  },
  shopGarmentExist: function (vendorProdId: string, shopUserId: string): Promise<boolean> {
    throw new Error('Function not implemented.')
  },
  exist: function (uid: string): Promise<boolean> {
    throw new Error('Function not implemented.')
  },
  useGetShopGarments: function (shopId: string) {
    throw new Error('Function not implemented.')
  },
  deleteShopGarments: function (shopId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  getBatchShopProds: function (shopIds: string[]): Promise<(ShopProduct & IoUser)[]> {
    throw new Error('Function not implemented.')
  },
  listByIds: function (uids: string[]): Promise<ShopProduct[]> {
    throw new Error('Function not implemented.')
  },
  getById: function (uid: string): Promise<ShopProduct | null> {
    throw new Error('Function not implemented.')
  },
  incrementStockCnt: async function (prod, cnt) {
    const docRef = doc(
      getIoCollection(IoFireApp.getInst().store, { c: IoCollection.SHOP_PROD }),
      prod.shopProdId
    )
    const stockCnt = prod.stockCnt + cnt
    await updateDoc(docRef, { stockCnt })
    return stockCnt
  },
  batchCreate: function (userId: string, args: ShopProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  create: function (userId: string, arg: ShopProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  get: function (uid: string): Promise<{ data?: ShopProduct | undefined }> {
    throw new Error('Function not implemented.')
  },
  list: function (
    d: PaginateParam<ShopProduct>
  ): Promise<{ data: ShopProduct[]; noMore: boolean }> {
    throw new Error('Function not implemented.')
  },
  update: function (arg: ShopProduct): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchUpdate: function (args: ShopProduct[]): Promise<void> {
    throw new Error('Function not implemented.')
  },
  delete: function (uid: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
  batchDelete: function (userId: string, uids: string[]): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
