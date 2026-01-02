'use client'

import { Button } from '@mui/material'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { enUS } from 'src/locales/en-US'
import { styles } from 'src/config/styles'

type Props = {
  language: Locale
}
export const HowToUseButton: FC<Props> = ({ language }) => {
  const t = language?.locale ?? enUS
  return (
    <Button variant={'outlined'} sx={styles.button.white} onClick={Scroll.scrollToHowToUse}>
      {t.words.howToUse}
    </Button>
  )
}
