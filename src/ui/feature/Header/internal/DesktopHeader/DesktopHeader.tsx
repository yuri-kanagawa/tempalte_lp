'use client'
import {
  AppLink,
  TopBar,
  DownLoadLink,
  ContactLink,
  HowToUseLink,
  LanguageSelect
} from '../commons'
import React, { FC } from 'react'
import { Box, Toolbar } from '@mui/material'
import { LanguageKey } from 'src/constants/language'

type Props = {
  lang: LanguageKey
  currentPath: string
}

export const DesktopHeader: FC<Props> = ({ lang, currentPath }) => {
  return (
    <TopBar
      sx={{
        backgroundColor: 'white',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'inline-flex'
        }
      }}>
      <Toolbar>
        <AppLink lang={lang} currentPath={currentPath} />
        <Box flexGrow={1} />
        <DownLoadLink lang={lang} currentPath={currentPath} />
        <HowToUseLink lang={lang} currentPath={currentPath} />
        <ContactLink lang={lang} currentPath={currentPath} />
        <LanguageSelect lang={lang} currentPath={currentPath} />
      </Toolbar>
    </TopBar>
  )
}
