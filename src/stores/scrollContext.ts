import { atom } from 'recoil'
import { LanguageKey } from 'src/constants/language'
import { ScrollKey } from 'src/constants/scroll'

export const scrollState = atom<ScrollKey | undefined>({
  key: 'scroll',
  default: undefined
})
