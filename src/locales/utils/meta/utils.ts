import { Metadata } from 'next'
import {
  FaqMeta,
  IndexMeta,
  MetaPageType,
  MetasType,
  PrivacyPolicyMeta,
  TermsMeta
} from 'src/locales/utils/meta/type'

export const getIndexMeta = (meta: Metadata): IndexMeta => {
  return {
    index: meta
  }
}

export const getFaqMeta = (meta: Metadata): FaqMeta => {
  return {
    faq: {
      index: meta
    }
  }
}

export const getPrivacyPolicyMeta = (meta: Metadata): PrivacyPolicyMeta => {
  return {
    privacyPolicy: {
      index: meta
    }
  }
}

export const getTermsMeta = (meta: Metadata): TermsMeta => {
  return {
    terms: {
      index: meta
    }
  }
}

export const getMetaPage = (
  index: IndexMeta,
  faq: FaqMeta,
  privacy: PrivacyPolicyMeta,
  term: TermsMeta
): MetaPageType => {
  return {
    metas: {
      ...index,
      ...faq,
      ...privacy,
      ...term
    }
  }
}
