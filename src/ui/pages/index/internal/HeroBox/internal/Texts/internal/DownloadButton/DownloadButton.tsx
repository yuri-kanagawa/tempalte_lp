'use client'
import { Button } from '@mui/material'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { styles } from 'src/config/styles'

type Props = { locale: Locale }
export const DownloadButton: FC<Props> = ({ locale }) => {
  const t = locale.translation
  return (
    <Button variant={'outlined'} sx={styles.button.white} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </Button>
  )
}
