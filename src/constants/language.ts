import { getObjectKeysArray } from 'src/utils/convert'

export const LANGUAGE = {
  en: 'English',
  ja: '日本語'
} as const

export type LanguageType = typeof LANGUAGE
export type LanguageKey = keyof typeof LANGUAGE

export const LANGUAGES: LanguageKey[] = getObjectKeysArray(
  LANGUAGE
) as LanguageKey[]
