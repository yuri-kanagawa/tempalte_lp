'use client'
import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = { language: Locale }
export const DownloadButton: FC<Props> = ({ language }) => {
  const t = language.locale
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </Button>
  )
}
