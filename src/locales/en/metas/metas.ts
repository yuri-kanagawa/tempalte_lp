import { getMetaPage } from 'src/locales/utils'
import { FaqMeta } from './faq'
import { IndexMeta } from 'src/locales/en/metas/root'
import { PrivacyPolicyMeta } from 'src/locales/en/metas/privacy-policy'
import { TermsMeta } from 'src/locales/en/metas/terms'

export const Meta = getMetaPage(
  IndexMeta,
  FaqMeta,
  PrivacyPolicyMeta,
  TermsMeta
)
