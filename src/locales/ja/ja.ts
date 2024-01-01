import { LocaleType } from 'src/locales/en'
import { words } from './words'
import { metas } from './metas'
import { faqs } from './faqs'
import { privacyPolicies } from './privacy-policies'
import { terms } from './terms'
export const ja: LocaleType = {
  ...words,
  ...metas,
  ...faqs,
  ...privacyPolicies,
  ...terms
} as const
