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
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
  currentPath: string
}

export const DesktopHeader: FC<Props> = ({ language, currentPath }) => {
  return (
    <TopBar
      sx={{
        backgroundColor: 'white',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'inline-flex'
        }
      }}
    >
      <Toolbar>
        <AppLink language={language} currentPath={currentPath} />
        <Box flexGrow={1} />
        <HowToUseLink language={language} currentPath={currentPath} />
        <DownLoadLink language={language} currentPath={currentPath} />
        <ContactLink language={language} currentPath={currentPath} />
        <LanguageSelect language={language} />
      </Toolbar>
    </TopBar>
  )
}
