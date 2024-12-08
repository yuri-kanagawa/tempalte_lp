import { Word } from 'src/locales/en/words'
import { Meta } from './metas'
import { Faqs } from './faqs'
import { PrivacyPolicies } from './privacy-policies'
import { Terms } from './terms'
import { LocaleType } from '../utils'

export const ja: LocaleType = {
  ...Word,
  ...Meta,
  ...Faqs,
  ...PrivacyPolicies,
  ...Terms
} as const
