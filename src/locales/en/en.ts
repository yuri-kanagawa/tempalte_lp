import { words, WordType } from 'src/locales/en/words'
import { metas, MetasType } from 'src/locales/en/metas'

export type LocaleType = WordType & MetasType

export const en = {
  ...words,
  ...metas
} as const
