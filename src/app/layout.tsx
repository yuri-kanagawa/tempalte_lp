import { AppProvider } from 'src/app/provider'
import type { Metadata } from 'next'
import { en } from 'src/locales/en'
import { DEFAULT_META } from 'src/constants/meta'
import { Header } from 'src/ui/feature/Header'
import React from 'react'
import { Contact } from 'src/ui/feature/Contact'
import { Footer } from 'src/ui/feature/Footer'

export const metadata: Metadata = {
  title: DEFAULT_META.title,
  description: en.metas.index.description,
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://example.com/og.png'
  },
  openGraph: {
    title: DEFAULT_META.openGraph?.title,
    description: en.metas.index.description,
    locale: 'en',
    siteName: '',
    url: '',
    images: [
      {
        url: '',
        width: 0,
        height: 0
      }
    ]
  },
  themeColor: 'black'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <AppProvider>
        <body
          style={{
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            background: 'black'
          }}>
          <Header />
          {children}
          <Contact />
          <Footer />
        </body>
      </AppProvider>
    </html>
  )
}
