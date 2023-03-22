import type { Product, ShopProduct } from '../product'

/**
 * 인아웃박스 창고
 * 쇼핑몰/도매 상품을 보관하며
 * 배송 데이터 생성, 재고관리
 */
export interface IoStorage {
  storageId: string
  name: string
  managerName: string

  locate: Location
  items: Product[] // as collection
}

export interface StorageDB {
  addItem(prod: ShopProduct, cnt: number): Promise<void>
  reduceItem(prod: ShopProduct, cnt: number): Promise<void>
}
