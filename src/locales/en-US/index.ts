import { words } from './words'
import { messages } from './messages'
import { metas } from './metas'
import { links } from './links'

export const enUS = {
  words,
  messages,
  links,
  metas
} as const

type EnLocale = typeof enUS

type Localize<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Localize<U>[]
  : T extends object
  ? { readonly [K in keyof T]: Localize<T[K]> }
  : T

export type Locale = {
  readonly words: Localize<EnLocale['words']>
  readonly messages: Localize<EnLocale['messages']>
  readonly links: Localize<EnLocale['links']>
  readonly metas: EnLocale['metas']
}
