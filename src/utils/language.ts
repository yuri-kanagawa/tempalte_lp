import { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'
import { LocaleType } from 'src/locales/utils'

export const isExistLanguage = (value: string): boolean => {
  return Language.create(value).isSuccess
}

export const getLanguageLabel = (value: string): string => {
  const language = Language.create(value).language ?? Language.default()
  return language.label
}

export const getIsChinese = (lang: string): boolean => lang === 'zh'
export const getIsEnglish = (lang: string): boolean => lang === 'en'
export const getLocaleFile = (locale?: string): LocaleType => {
  switch (locale) {
    // case 'ar':
    //     return ar
    //
    // case 'de':
    //     return de

    case 'ja':
      return ja

    default:
      return en
  }
}

export const generateLocalesWithoutEn = (): { locale: string }[] =>
  LANGUAGES.filter(e => e !== 'en').map(e => ({ locale: e }))
