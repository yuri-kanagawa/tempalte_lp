import type { Metadata } from 'next'
import { IndexMeta } from './root/meta'
import { FaqMeta } from './faq/meta'
import { TermsMeta } from './terms/meta'
import { PrivacyPolicyMeta } from './privacy-policy/meta'

export const Meta: {
  index: Metadata
  faq: Metadata
  terms: Metadata
  privacyPolicy: Metadata
} = {
  index: IndexMeta,
  faq: FaqMeta,
  terms: TermsMeta,
  privacyPolicy: PrivacyPolicyMeta
}
