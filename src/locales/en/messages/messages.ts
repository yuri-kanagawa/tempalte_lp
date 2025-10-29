import { links } from '../links'

export const messages = {
  faq: [
    { q: 'What is APP?', a: 'APP is a simple landing page template.' },
    { q: 'How much does it cost?', a: 'APP is free to use.' },
    { q: 'Which platforms are supported?', a: 'iOS and Android are supported.' }
  ],
  terms: [
    { title: 'Terms of Service', body: '' }
  ],
  privacyPolicy: [
    { title: 'Privacy Policy', body: '' }
  ],
  sns: links
} as const