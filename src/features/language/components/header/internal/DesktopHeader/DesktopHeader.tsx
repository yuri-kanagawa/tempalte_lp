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
}

export const DesktopHeader: FC<Props> = ({ language }) => {
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
        <AppLink language={language} />
        <Box flexGrow={1} />
        <HowToUseLink language={language} />
        <DownLoadLink language={language} />
        <ContactLink language={language} />
        <LanguageSelect language={language} />
      </Toolbar>
    </TopBar>
  )
}
