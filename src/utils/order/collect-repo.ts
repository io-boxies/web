import type { OrderCollect } from './domain'

export class OrderCollector {
  constructor() {}
  ablyOrders(): OrderCollect {
    throw new Error('Function not implemented.')
  }
  excelOrders(): OrderCollect {
    throw new Error('Function not implemented.')
  }
}
