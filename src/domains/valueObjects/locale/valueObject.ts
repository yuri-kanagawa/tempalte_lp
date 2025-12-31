import { LocaleValueError } from './error'
import { LocaleResult } from './result'
import { enUS } from 'src/locales/en-US'
import { jaJP } from 'src/locales/ja-JP'

import type { Locale as LocaleData } from 'src/locales/en-US'

export class Locale {
  private readonly _value: string

  static readonly EN = 'en-US' as const
  static readonly JA = 'ja-JP' as const

  static readonly LANGUAGES = {
    [Locale.EN]: 'English',
    [Locale.JA]: '日本語'
  } as const

  private constructor(value: string) {
    this._value = value
  }

  static create(value: string): LocaleResult {
    if (!Object.keys(Locale.LANGUAGES).includes(value)) {
      return new LocaleResult(null, new LocaleValueError(`Invalid locale value: ${value}`))
    }
    return new LocaleResult(new Locale(value), null)
  }

  static default(): Locale {
    return new Locale(Locale.EN)
  }

  static getAllLanguages(): ReadonlyArray<{ key: string; label: string }> {
    return Object.entries(Locale.LANGUAGES).map(([key, label]) => ({
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
    return Object.entries(Locale.LANGUAGES)
      .filter(([key]) => key !== Locale.default().value)
      .map(([key, label]) => ({
        key,
        label
      }))
  }

  get value(): string {
    return this._value
  }

  get label(): string {
    return Locale.LANGUAGES[this._value as keyof typeof Locale.LANGUAGES]
  }

  get flag(): string {
    switch (this._value) {
      case Locale.EN:
        return '🇬🇧'
      case Locale.JA:
        return '🇯🇵'
      default:
        return '🌐'
    }
  }

  get isEnglish(): boolean {
    return this._value === Locale.EN
  }

  get isJapanese(): boolean {
    return this._value === Locale.JA
  }

  equals(other: Locale): boolean {
    return this._value === other._value
  }

  toString(): string {
    return this._value
  }

  get locale(): LocaleData {
    if (this.isEnglish) return enUS
    if (this.isJapanese) return jaJP
    return enUS
  }
}
