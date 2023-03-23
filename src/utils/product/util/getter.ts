import { v5 } from 'uuid'
import type { ProdOption } from '..'

export const newVendorProdUid = (p: {
  vendorProdName: string
  prodType: string
  options: ProdOption[]
}) => v5([p.vendorProdName, p.prodType, ...p.options.map((x) => x.optId)].join('_'), v5Namespace)
