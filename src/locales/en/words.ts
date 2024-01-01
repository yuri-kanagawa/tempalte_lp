export const words = {
  heroText: 'Fight is not fun,\nVictory is fun.',
  contact: 'CONTACT',
  terms: 'TERMS',
  faq: 'FAQ',
  download: 'DOWNLOAD',
  howToUse: 'HOW TO USE',
  privacyPolicy: 'PRIVACY POLICY'
} as const

export type WordType = {
  [key in keyof typeof words]: string
}
