'use client'

import { Button } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { onClickHowToUse } from 'src/constants/scroll'
import React, { FC } from 'react'
import { getLocaleFile } from 'src/utils/language'

type Props = {
  lang: string
}
export const HowToUseButton: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  return (
    <Button
      variant={'outlined'}
      sx={whiteButtonStyle}
      onClick={onClickHowToUse}>
      {t.words.howToUse}
    </Button>
  )
}
