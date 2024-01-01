import { metaFaq, metaIndex, metaPage, metas } from 'src/locales/en/metas/metas'

type MetaType = {
  [key in keyof typeof metaIndex]: string
}

type MetaFaqType = {
  [key in keyof typeof metaFaq]: MetaType
}

type MetaPageType = {
  [key in keyof typeof metaPage]: MetaType | MetaFaqType
}

export type MetasType = {
  [key in keyof typeof metas]: MetaPageType
}
