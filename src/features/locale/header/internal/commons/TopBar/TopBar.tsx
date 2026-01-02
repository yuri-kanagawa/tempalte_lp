'use client'
import { FC, ReactNode } from 'react'
import { AppBar, AppBarProps } from '@mui/material'

type Props = {
  children: ReactNode
} & AppBarProps
export const TopBar: FC<Props> = ({ children, ...appBarProps }) => {
  return (
    <AppBar {...appBarProps} position={'sticky'}>
      {children}
    </AppBar>
  )
}
