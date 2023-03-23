import type { IoStorage } from './domain'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const validIoStorage = (data: IoStorage) => undefined
export const newIoStorage = (data: IoStorage) => {
  validIoStorage(data)
  return data
}
