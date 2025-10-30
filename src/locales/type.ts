import type { Metadata } from 'next'

export type Words = {
  heroText: string
  contact: string
  terms: string
  faq: string
  download: string
  howToUse: string
  privacyPolicy: string
}

export type Messages = {
  readonly faq: readonly { readonly q: string; readonly a: string }[]
  readonly terms: readonly { readonly title: string; readonly body: string }[]
  readonly privacyPolicy: readonly { readonly title: string; readonly body: string }[]
  readonly sns: unknown
}

export type Metas = {
  index: Metadata
  faq: Metadata
  terms: Metadata
  privacyPolicy: Metadata
}

export type Locale = {
  words: Words
  messages: Messages
  metas: Metas
}


