import { RequiredField } from '@/utils/exception'
import { CollectionReference, collection, collectionGroup, Firestore } from '@firebase/firestore'
import type { QueryDocumentSnapshot, WithFieldValue } from 'firebase/firestore'
import { type getCollectParam, IoCollection } from './domain'

export function getIoCollection<T>(store: Firestore, p: getCollectParam): CollectionReference<T> {
  let str: string
  switch (p.c) {
    case IoCollection.USER:
      str = 'user'
      break
    case IoCollection.MAPPER:
      str = `mapper`
      break
    case IoCollection.VENDOR_PROD:
      str = 'vendorProduct'
      break
    case IoCollection.SHOP_PROD:
      str = 'shopProduct'
      break
    case IoCollection.IO_PAY:
      str = 'ioPay'
      break
    case IoCollection.PAY_HISTORY:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `ioPay/${p.uid}/history` // orderId
      break
    case IoCollection.PICKUP_LOCATES:
      str = 'pickupLocates'
      break
    case IoCollection.ORDER_PROD:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/orderProd` // /${p.shopProdId}
      break
    case IoCollection.ORDER_PROD_NUMBER:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/orderNumber` // orderId
      break
    case IoCollection.SHIPMENT:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/shipment` // orderId
      break
    case IoCollection.USER_LOG:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/logs` // orderId
      break
    case IoCollection.TOKENS:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/tokens` // orderId
      break
    case IoCollection.CS_POST:
      str = `csPost`
      break
    case IoCollection.TEST:
      str = `test`
      break
    case IoCollection.VIRTUAL_VENDOR_PROD:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/virtualVendorProduct`
      break
    case IoCollection.VIRTUAL_ORDER_PROD:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/virtualOrderProd`
      break
    case IoCollection.VIRTUAL_USER:
      if (!p.uid) throw new RequiredField('getIoCollection', 'uid')
      str = `user/${p.uid}/virtualUser`
      break
    case IoCollection.REQUEST_ENCASH:
      str = `requestEncash`
      break
    case IoCollection.REQUEST_CHARGE:
      str = `requestCharge`
      break
    case IoCollection.STORAGE_IO:
      str = `ioStorage`
      break
    case IoCollection.STORAGE_SHOP_PROD:
      if (!p.storageId) throw new RequiredField('getIoCollection', 'storageId')
      str = `ioStorage/${p.uid}/storageShopProd`
      break
    case IoCollection.STORAGE_SHIP_HIST:
      if (!p.storageId) throw new RequiredField('getIoCollection', 'storageId')
      str = `ioStorage/${p.uid}/storageShipHist`
      break
    default:
      throw Error(`IoCollection Enum Member ${p.c} is not Exist`)
  }

  return collection(store, str).withConverter(fireConverter<T>())
}

export function getIoCollectionGroup(store: Firestore, c: IoCollection) {
  let str: string
  switch (c) {
    case IoCollection.ORDER_PROD:
      str = `orderProd`
      break
    case IoCollection.VIRTUAL_USER:
      str = `virtualUser`
      break
    case IoCollection.VIRTUAL_VENDOR_PROD:
      str = `virtualVendorProduct`
      break
    case IoCollection.USER_LOG:
      str = `logs`
      break
    case IoCollection.PAY_HISTORY:
      str = `history`
      break
    case IoCollection.SHIPMENT:
      str = `shipment`
      break
    default:
      throw Error(`IoCollection Enum Member ${c.toString()} is not Exist`)
  }
  return collectionGroup(store, str)
}

export const fireConverter = <T>(toJson?: (d: T) => any, fromJson?: (d: any) => T) => ({
  toFirestore: (data: WithFieldValue<T>) => (toJson ? toJson(data as T) : commonToJson(data)),
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    fromJson ? fromJson(snap.data()) : (commonFromJson(snap.data()) as T)
})
