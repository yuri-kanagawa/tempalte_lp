import { AppProvider } from 'src/app/provider'
import type { Metadata } from 'next'
import { en } from 'src/locales/en'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export const metadata: Metadata = en.metas.index

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <link rel="manifest" href="/manifest.json" />
      <body
        style={{
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          background: 'black'
        }}
      >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
