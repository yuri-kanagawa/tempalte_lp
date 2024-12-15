'use client'
import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { onClickDownload } from 'src/constants/scroll'
import React, { FC } from 'react'
import { getLocaleFile } from 'src/utils/language'

type Props = { lang: string }
export const DownloadButton: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  return (
    <Button
      variant={'outlined'}
      sx={whiteButtonStyle}
      onClick={onClickDownload}>
      {t.word.download}
    </Button>
  )
}
