import { LANGUAGE, LanguageKey, LANGUAGES } from 'src/constants/language'
import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'
import { LocaleType } from 'src/locales/utils'

export const isExistLanguage = (value: string): boolean => value in LANGUAGE

export const getLanguageLabel = (value: LanguageKey): string => LANGUAGE[value]

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
