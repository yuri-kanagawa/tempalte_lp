import { words, WordType } from './words'
import { metas, MetaPageType } from './metas'
import { faqs, FaqListType } from './faqs'
import { privacyPolicies, PrivacyPolicyArrayType } from './privacy-policies'
import { terms, TermArrayType } from './terms'
export type LocaleType = WordType &
  MetaPageType &
  FaqListType &
  PrivacyPolicyArrayType &
  TermArrayType

export const en: LocaleType = {
  ...words,
  ...metas,
  ...faqs,
  ...privacyPolicies,
  ...terms
} as const
