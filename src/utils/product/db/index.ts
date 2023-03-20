// import type { IoUser } from '@/utils/auth/domain'
// import type { PaginateParam } from '@/utils/common'
// import { getIoCollection } from '@/utils'
// import { doc } from 'firebase/firestore'
// import type {
//   VendorProductDB,
//   ShopProductDB,
//   ProdOptionObj,
//   VendorProdSimilar,
//   VendorProduct,
//   ShopProduct

import type { IoUser } from '@/utils/auth'
import type { PaginateParam } from '@/utils/common'
import { doc } from 'firebase/firestore'
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
  incrementStockCnt: function (prod, cnt) {
    throw new Error('Function not implemented.')
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
  getShopGarments: function (d: {
    shopId?: string | undefined
    vendorId?: string | undefined
  }): Promise<ShopProduct[]> {
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

  // incrementStockCnt: function (prod, cnt) {
  //   doc(getIoCollection(IoFireApp.))
  //   prod.stockCnt + cnt
  // },
  incrementStockCnt: function (prod, cnt) {
    throw new Error('zz')
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
