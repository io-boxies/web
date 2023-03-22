import type { OrderCollect } from '../domain'

export class OrderCollector {
  constructor() {}
  collectOrdersZigzag(): OrderCollect {
    throw new Error('Function not implemented.')
  }
  collectCancelsZigzag(): OrderCollect {
    throw new Error('Function not implemented.')
  }
  collectOrdersCafe(): OrderCollect {
    throw new Error('Function not implemented.')
  }
  collectCancelsCafe(): OrderCollect {
    throw new Error('Function not implemented.')
  }

  excelOrders(): OrderCollect {
    throw new Error('Function not implemented.')
  }
}
