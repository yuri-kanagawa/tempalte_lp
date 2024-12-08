import { MetaPageType } from './meta'
import { FaqListType } from './faq'
import { PrivacyPolicyArrayType } from './privacyPolicy'
import { TermArrayType } from './terms'
import { WordType } from './words'

export type LocaleType = WordType &
  MetaPageType &
  FaqListType &
  PrivacyPolicyArrayType &
  TermArrayType
