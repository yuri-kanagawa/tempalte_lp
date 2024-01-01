import { getIsEnglish } from 'src/utils/language'

const changeLocalePage = (locale: string, url: string) => {
  if (getIsEnglish(locale)) return url
  else return `/${locale}${url}`
}
export const route = {
  root: (locale: string) => changeLocalePage(locale, '/'),
  privacyPolicy: {
    index: (locale: string) => changeLocalePage(locale, '/privacy-policy')
  },
  terms: {
    index: (locale: string) => changeLocalePage(locale, '/terms')
  },
  faq: {
    index: (locale: string) => changeLocalePage(locale, '/faq')
  }
}
