'use client'
import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { Scroll } from '@lib/scrolls'
import React, { FC } from 'react'
import { getLocaleFile } from 'src/utils/language'

type Props = { lang: string }
export const DownloadButton: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} onClick={Scroll.scrollToDownload}>
      {t.words.download}
    </Button>
  )
}
