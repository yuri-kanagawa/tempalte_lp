import { Locale } from './valueObject'
import { LocaleValueError } from './error'

export class LocaleResult {
  constructor(
    public readonly locale: Locale | null,
    public readonly error: LocaleValueError | null
  ) {}

  get isSuccess(): boolean {
    return this.error === null
  }

  get isFailure(): boolean {
    return this.error !== null
  }
}
