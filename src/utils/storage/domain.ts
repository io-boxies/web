import type { ShopProduct } from '../product'
import type { Locate } from '../shipment/domain'

/**
 * 인아웃박스 창고
 * 쇼핑몰/도매 상품을 보관하며
 * 배송 데이터 생성, 재고관리
 */
export interface IoStorage {
  name: string
  managerName: string

  locate: Locate
  items?: ShopProduct[] // as collection
}

export interface StorageDB {
  addItem(prod: ShopProduct, cnt: number): Promise<void>
  reduceItem(prod: ShopProduct, cnt: number): Promise<void>
  getItems(storageId: string, shopId: string): Promise<void>
}
