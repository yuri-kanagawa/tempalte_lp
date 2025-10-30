import { words } from './words'
import { messages } from './messages/messages'
import { Meta } from './metas/meta'
import type { Locale } from '../type'

export const en: Locale = {
  words,
  messages,
  metas: Meta
} as const

export type { Locale }
