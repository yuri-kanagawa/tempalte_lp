import { words } from './words'
import { messages } from './messages/messages'
import { Meta } from './metas/meta'

export const en = {
  words,
  messages,
  metas: Meta
} as const

export type Locale = typeof en
