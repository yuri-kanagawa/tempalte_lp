'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@mui/material'
import { theme } from 'src/stores/thema'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  )
}
