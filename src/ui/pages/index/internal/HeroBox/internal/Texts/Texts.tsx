import { Stack, Typography } from '@mui/material'
import { titleFontSize } from 'src/styles/fontStyle'
import React, { FC } from 'react'
import { HowToUseButton } from './internal'
import { DownloadButton } from 'src/ui/pages/index/internal/HeroBox/internal/Texts/internal/DownloadButton/DownloadButton'
import type { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const Texts: FC<Props> = ({ language }) => {
  const t = language?.locale ?? en
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
      <HowToUseButton language={language} />
      <DownloadButton language={language} />
    </Stack>
  )
}
