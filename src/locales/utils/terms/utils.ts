import { TermType, TermArrayType } from './type'

export const generateTerm = (value1: string, value2: string): TermType => {
  return {
    heading: value1,
    content: value2
  }
}

export const generateTermArray = (...value: TermType[]): TermArrayType => {
  return {
    termArray: value
  }
}
