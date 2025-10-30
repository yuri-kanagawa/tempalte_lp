'use client'
import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'

type Props = { lang: string }
export const DownloadButton: FC<Props> = ({ lang }) => {
  const t = lang === 'ja' ? ja : en
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToDownload}>
      {t.words.download}
    </Button>
  )
}
