export interface CU_DATE {
  readonly createdAt?: Date
  readonly updatedAt?: Date
}
export enum TIME_FORMATS {
  DAY,
  MIN
}

export interface PaginateParam<T> {
  pageSize?: number
  lastData?: T
}

export interface CrudDB<T> {
  batchCreate(userId: string, args: T[]): Promise<void>
  create(userId: string, arg: T[]): Promise<void>

  get(uid: string): Promise<{ data?: T }>
  list(d: PaginateParam<T>): Promise<{
    data: T[]
    noMore: boolean
  }>
  listByIds(ids: string[]): Promise<T[]>

  update(arg: T): Promise<void>
  batchUpdate(args: T[]): Promise<void>
  delete(uid: string): Promise<void>
  batchDelete(userId: string, uids: string[]): Promise<void>
}
