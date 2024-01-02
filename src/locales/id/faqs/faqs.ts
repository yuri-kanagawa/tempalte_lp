import {
  generateFaqAccordionObject,
  generateFaqType
} from 'src/locales/en/faqs'

export const faqs = generateFaqAccordionObject(
  generateFaqType('1', '2'),
  generateFaqType('1', '2'),
  generateFaqType('1', '2')
)
