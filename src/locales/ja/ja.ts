import { LocaleType } from 'src/locales/en'
import { words } from 'src/locales/ja/words'
import { metas } from 'src/locales/ja/metas/metas'

export const ja: LocaleType = {
  ...words,
  ...metas
} as const
