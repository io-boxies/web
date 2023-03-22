import { v5NameSpace } from '@/constants'
import { v5 } from 'uuid'

const genProdId = (uid: string, prodName: string, optId: string) =>
  v5(uid + prodName + optId, v5NameSpace)
export function newVirtualProduct(userId: string) {}
export function newShopProduct(userId: string) {}
