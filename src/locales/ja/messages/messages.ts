import { links } from '../links'

export const messages = {
  faq: [
    { q: 'APPとは何ですか？', a: 'APPはシンプルなランディングページテンプレートです。' },
    { q: '料金はいくらですか？', a: 'APPは無料でご利用いただけます。' },
    { q: 'どのプラットフォームに対応していますか？', a: 'iOSとAndroidに対応しています。' }
  ],
  terms: [{ title: '利用規約', body: '' }],
  privacyPolicy: [{ title: 'プライバシーポリシー', body: '' }],
  sns: links
} as const
