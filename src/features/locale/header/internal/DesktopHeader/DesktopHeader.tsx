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
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  locale: Locale
}

export const DesktopHeader: FC<Props> = ({ locale }) => {
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
        <AppLink locale={locale} />
        <Box flexGrow={1} />
        <HowToUseLink locale={locale} />
        <DownLoadLink locale={locale} />
        <ContactLink locale={locale} />
        <LanguageSelect locale={locale} />
      </Toolbar>
    </TopBar>
  )
}
