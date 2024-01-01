import { en, LocaleType } from 'src/locales/en'
import { ja } from 'src/locales/ja/ja'

export const getLocale = (locale?: string): LocaleType => {
  switch (locale) {
    case 'ja':
      return ja

    default:
      return en
  }
}
