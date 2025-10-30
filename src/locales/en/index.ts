import { words } from './words'
import { messages } from './messages/messages'

export const en = {
  words,
  messages
} as const

export type Locale = typeof en
