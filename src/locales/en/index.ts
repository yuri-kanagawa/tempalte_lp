import { words } from './words'
import { messages } from './messages/messages'
import { IndexMeta } from './metas/root/meta'
import { FaqMeta } from './metas/faq/meta'
import { TermsMeta } from './metas/terms/meta'
import { PrivacyPolicyMeta } from './metas/privacy-policy/meta'

export const en = {
  words,
  messages,
  metas: {
    index: IndexMeta,
    faq: FaqMeta,
    terms: TermsMeta,
    privacyPolicy: PrivacyPolicyMeta
  }
} as const

export type Locale = typeof en
