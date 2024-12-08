import { FaqListType, FaqType } from './type'

export const generateFaqType = (question: string, answer: string): FaqType => {
  return {
    question,
    answer
  }
}

export const generateFaqAccordionObject = (
  ...value: FaqType[]
): FaqListType => {
  return {
    faqArray: value
  }
}
