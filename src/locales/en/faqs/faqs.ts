import { generateFaqAccordionObject, generateFaqType } from './utils'

export const faqs = generateFaqAccordionObject(
  generateFaqType('1', '2'),
  generateFaqType('1', '2'),
  generateFaqType('1', '2')
)
