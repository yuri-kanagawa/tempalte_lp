import { LanguageValueError } from './error'
import { LanguageResult } from './result'

export class Language {
  private readonly _value: string

  static readonly EN = 'en' as const
  static readonly JA = 'ja' as const

  static readonly LANGUAGES = {
    [Language.EN]: 'English',
    [Language.JA]: '日本語'
  } as const

  private constructor(value: string) {
    this._value = value
  }

  static create(value: string): LanguageResult {
    if (!Object.keys(Language.LANGUAGES).includes(value)) {
      return new LanguageResult(
        null,
        new LanguageValueError(`Invalid language value: ${value}`)
      )
    }
    return new LanguageResult(new Language(value), null)
  }

  static default(): Language {
    return new Language(Language.EN)
  }

  static getAllLanguages(): ReadonlyArray<{ key: string; label: string }> {
    return Object.entries(Language.LANGUAGES).map(([key, label]) => ({
      key,
      label
    }))
  }

  /**
   * ページ生成用の言語リストを取得（英語を除く）
   * 英語はデフォルトパスでアクセスするため、[language]ルートの生成には不要
   */
  static getPageLanguages(): ReadonlyArray<{
    key: string
    label: string
  }> {
    return Object.entries(Language.LANGUAGES)
      .filter(([key]) => key !== Language.default().value)
      .map(([key, label]) => ({
        key,
        label
      }))
  }

  get value(): string {
    return this._value
  }



  get label(): string {
    return Language.LANGUAGES[this._value as keyof typeof Language.LANGUAGES]
  }

  get flag(): string {
    switch (this._value) {
      case Language.EN:
        return '🇬🇧'
      case Language.JA:
        return '🇯🇵'
      default:
        return '🌐'
    }
  }

  get isEnglish(): boolean {
    return this._value === Language.EN
  }

  get isJapanese(): boolean {
    return this._value === Language.JA
  }



  equals(other: Language): boolean {
    return this._value === other._value
  }

  toString(): string {
    return this._value
  }

  get locale(): any {
    // 直接ロケールを取得して循環依存を回避
    switch (this._value) {
      case Language.EN:
        return require('src/locales/en').en
      case Language.JA:
        return require('src/locales/ja').ja
      default:
        return require('src/locales/en').en
    }
  }
}