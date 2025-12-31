'use client'

import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { enUS } from 'src/locales/en-US'

type Props = {
  language: Locale
}
export const HowToUseButton: FC<Props> = ({ language }) => {
  const t = language?.locale ?? enUS
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToHowToUse}>
      {t.words.howToUse}
    </Button>
  )
}
