import { en, LocaleType } from 'src/locales/en'
import { ja } from 'src/locales/ja/ja'

export const getLocale = (locale?: string): LocaleType => {
  console.log(locale)
  switch (locale) {
    case 'ja':
      console.log('sdsfd')
      return ja

    default:
      console.log('534534 ')
      return en
  }
}
