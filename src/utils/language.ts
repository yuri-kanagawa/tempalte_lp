import { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'

export const isExistLanguage = (value: string): boolean => {
  return Language.create(value).isSuccess
}

export const getLanguageLabel = (value: string): string => {
  const language = Language.create(value).language ?? Language.default()
  return language.label
}

export const getIsChinese = (lang: string): boolean => lang === 'zh'
export const getIsEnglish = (lang: string): boolean => lang === 'en'
export const getLocaleFile = (locale?: string) => {
  switch (locale) {
    case 'ja':
      return ja
    default:
      return en
  }
}

export const generateLocalesWithoutEn = (): { locale: string }[] =>
  Language.getPageLanguages().map(({ key }) => ({ locale: key }))
