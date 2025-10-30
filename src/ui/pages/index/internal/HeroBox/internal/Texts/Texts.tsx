import { Stack, Typography } from '@mui/material'
import { titleFontSize } from 'src/styles/fontStyle'
import React, { FC } from 'react'
import { getLocaleFile } from 'src/utils/language'
import { HowToUseButton } from './internal'
import { DownloadButton } from 'src/ui/pages/index/internal/HeroBox/internal/Texts/internal/DownloadButton/DownloadButton'

type Props = {
  lang: string
}
export const Texts: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          color: 'white',
          whiteSpace: 'pre-wrap',
          ...titleFontSize
        }}
      >
        {t.words.heroText}
      </Typography>
      <HowToUseButton lang={lang} />
      <DownloadButton lang={lang} />
    </Stack>
  )
}
