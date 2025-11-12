'use client'
import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'

type Props = { language: Language }
export const DownloadButton: FC<Props> = ({ language }) => {
  const t = language.locale
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </Button>
  )
}
