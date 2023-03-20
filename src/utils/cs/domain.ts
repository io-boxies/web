import type { OutputData } from '@editorjs/editorjs'
import type { USER_ROLE } from '..'

export interface CsPost {
  readonly createdAt: Date
  readonly no: string
  readonly category: string
  readonly title: string
  readonly content: OutputData
  readonly postType: POST_TYPE
  readonly allowRole: USER_ROLE
  readonly txt?: string // for search
}

export type POST_TYPE = 'FAQ' | 'NOTICE' | 'EVENT'
export const POST_TYPE: { [key in POST_TYPE]: string } = Object.freeze({
  FAQ: 'FAQ',
  NOTICE: 'NOTICE',
  EVENT: 'EVENT'
})
