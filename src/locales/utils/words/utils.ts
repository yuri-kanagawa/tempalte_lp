import { WordType, Word } from 'src/locales/utils'

export const getWord = (word: Word): WordType => {
  return {
    word: {
      ...word
    }
  }
}
