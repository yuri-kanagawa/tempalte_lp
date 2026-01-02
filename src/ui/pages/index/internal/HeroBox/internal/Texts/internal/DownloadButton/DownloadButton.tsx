'use client'
import { Button } from '@mui/material'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { styles } from 'src/config/styles'

type Props = { language: Locale }
export const DownloadButton: FC<Props> = ({ language }) => {
  const t = language.locale
  return (
    <Button variant={'outlined'} sx={styles.button.white} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </Button>
  )
}
