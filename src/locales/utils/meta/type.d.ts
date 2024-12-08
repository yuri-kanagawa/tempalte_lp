import { Metadata } from 'next'

export type IndexMeta = {
  index: Metadata
}

export type FaqMeta = {
  faq: {
    index: Metadata
  }
}

export type PrivacyPolicyMeta = {
  privacyPolicy: {
    index: Metadata
  }
}

export type TermsMeta = {
  terms: {
    index: Metadata
  }
}

export type MetasType = IndexMeta & FaqMeta & PrivacyPolicyMeta & TermsMeta

export type MetaPageType = {
  metas: MetasType
}
