import { words } from 'src/locales/en'

export type Word = {
  [Key in keyof typeof words]: string
}

export type WordType = {
  word: Word
}
