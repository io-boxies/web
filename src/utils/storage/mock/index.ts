import type { IoStorage } from '../domain'

export const mockIoStorage = (): IoStorage => {
  const locate = mockLocate()
  return {
    name: fk.address.state(),
    managerName: fk.name.fullName(),
    locate,
    items: mockShopProds()
  }
}
