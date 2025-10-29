import { PathBuilder } from 'src/lib/routes'
import { Language } from 'src/domains/valueObjects/language'

export const route = {
  root: (locale: string) => new PathBuilder(Language.create(locale).language ?? Language.default()).root(),
  privacyPolicy: {
    index: (locale: string) => new PathBuilder(Language.create(locale).language ?? Language.default()).privacyPolicy()
  },
  terms: {
    index: (locale: string) => new PathBuilder(Language.create(locale).language ?? Language.default()).terms()
  },
  faq: {
    index: (locale: string) => new PathBuilder(Language.create(locale).language ?? Language.default()).faq()
  }
}
