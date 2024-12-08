import { generateFaqAccordionObject, generateFaqType } from 'src/locales/utils'

export const Faqs = generateFaqAccordionObject(
  generateFaqType('1', '2'),
  generateFaqType('1', '2'),
  generateFaqType('1', '2')
)
