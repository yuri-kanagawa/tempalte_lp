import { FaqListType, FaqType } from 'src/locales/en/faqs/type'

export const generateFaqType = (value1: string, value2: string): FaqType => {
  return {
    question: value1,
    answer: value2
  }
}

export const generateFaqAccordionObject = (
  ...value: FaqType[]
): FaqListType => {
  return {
    faqArray: value
  }
}
