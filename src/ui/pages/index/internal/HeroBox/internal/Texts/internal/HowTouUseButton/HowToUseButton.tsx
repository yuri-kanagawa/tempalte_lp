'use client'

import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const HowToUseButton: FC<Props> = ({ language }) => {
  const t = language?.locale ?? en
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToHowToUse}>
      {t.words.howToUse}
    </Button>
  )
}
