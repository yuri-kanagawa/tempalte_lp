import { atom } from 'recoil'
import { LanguageKey } from 'src/constants/language'

export const langState = atom<LanguageKey>({
  key: 'lang',
  default: 'en'
})
