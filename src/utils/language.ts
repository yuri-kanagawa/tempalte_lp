import { LANGUAGE, LanguageKey } from 'src/constants/language'

export const isExistLanguage = (value: string): boolean => value in LANGUAGE

export const getLanguageLabel = (value: LanguageKey): string => LANGUAGE[value]

export const getIsChinese = (lang: string): boolean => lang === 'zh'
export const getIsEnglish = (lang: string): boolean => lang === 'en'
export const changeLang = (
  func: (value: LanguageKey) => void,
  lang: string
) => {
  func(lang as LanguageKey)
}
