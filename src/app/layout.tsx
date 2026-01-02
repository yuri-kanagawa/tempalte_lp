import type { Metadata } from 'next'
import { enUS } from 'src/locales/en-US'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { AppProvider } from './AppProvider'

export const metadata: Metadata = enUS.metas.index

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
        <AppRouterCacheProvider>
          <AppProvider>{children}</AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
