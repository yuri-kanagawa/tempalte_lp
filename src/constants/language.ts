import { convertObjectKeysToArray } from 'src/utils/convert'
export const DefaultLanguage = 'en'
export const LANGUAGE = {
  en: 'English',
  ja: '日本語'
} as const

export type LanguageKey = keyof typeof LANGUAGE

export const LANGUAGES: LanguageKey[] = convertObjectKeysToArray(
  LANGUAGE
) as LanguageKey[]
