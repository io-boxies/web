import { v5 } from 'uuid'
import type { ProdOption } from '..'
import { v5Namespace } from '../../common/io-fns'

export const genVendorProdUid = (p: {
  vendorProdName: string
  prodType: string
  option: ProdOption[]
}) => v5([p.vendorProdName, p.prodType, ...p.option.map((x) => x.optId)].join('_'), v5Namespace)
