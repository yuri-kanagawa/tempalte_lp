import { Language } from 'src/domains/valueObjects/language'

export class PathBuilder {
  static readonly ROOT = '/'
  static readonly FAQ = '/faq'
  static readonly TERMS = '/terms'
  static readonly PRIVACY_POLICY = '/privacy'
  static readonly HOME_PAGE_URL = 'https://ledenm.com'
  private readonly language: Language

  static isRoot(path: string): boolean {
    const root = '/'
    const languageKeys = Object.keys(Language.LANGUAGES)
    const languageRoots = languageKeys.map((key) => `/${key}`)
    return path === root || languageRoots.includes(path)
  }

  private static withLocale(locale: Language, url: string): string {
    return locale.isEnglish ? url : `/${locale.value}${url}`
  }

  constructor(locale: Language) {
    this.language = locale
  }

  root(): string {
    return PathBuilder.withLocale(this.language, PathBuilder.ROOT)
  }

  faq(): string {
    return PathBuilder.withLocale(this.language, PathBuilder.FAQ)
  }

  terms(): string {
    return PathBuilder.withLocale(this.language, PathBuilder.TERMS)
  }

  privacyPolicy(): string {
    return PathBuilder.withLocale(this.language, PathBuilder.PRIVACY_POLICY)
  }
  homePageUrl(): string {
    return PathBuilder.withLocale(this.language, PathBuilder.HOME_PAGE_URL)
  }
}
