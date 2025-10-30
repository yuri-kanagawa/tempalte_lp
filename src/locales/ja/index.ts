import { words } from './words'
import { messages } from './messages/messages'
import { Meta } from './metas/meta'
import type { Locale } from '../type'

export const ja: Locale = {
  words,
  messages,
  metas: Meta
} as const
