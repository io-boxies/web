import type { StorageDB } from '.'
import type { ShopProduct } from '..'

export const STORAGE_DB: StorageDB = {
  addItem: function (prod: ShopProduct, cnt: number): Promise<void> {
    // getIoCollection(IoFireApp.getInst().store, { c: IoCollection.STORAGE_SHOP_PROD })
    // getIoCollection(IoFireApp.getInst().store, { c: IoCollection.STORAGE_SHIP_HIST })
    throw new Error('Function not implemented.')
  },
  reduceItem: function (prod: ShopProduct, cnt: number): Promise<void> {
    // getIoCollection(IoFireApp.getInst().store, { c: IoCollection.STORAGE_SHOP_PROD })
    throw new Error('Function not implemented.')
  },
  getItems: function (storageId: string, shopId: string): Promise<void> {
    throw new Error('Function not implemented.')
  }
}
