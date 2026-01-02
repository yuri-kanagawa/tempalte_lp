import { Stack, Typography } from '@mui/material'
import { styles } from 'src/config/styles'
import React, { FC } from 'react'
import { HowToUseButton } from './internal'
import { DownloadButton } from 'src/ui/pages/index/internal/HeroBox/internal/Texts/internal/DownloadButton/DownloadButton'
import type { Locale } from 'src/domains/valueObjects/locale'
import { enUS } from 'src/locales/en-US'

type Props = {
  language: Locale
}
export const Texts: FC<Props> = ({ language }) => {
  const t = language?.locale ?? enUS
  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          color: 'white',
          whiteSpace: 'pre-wrap',
          ...styles.typography.titleFontSize
        }}
      >
        {t.words.heroText}
      </Typography>
      <HowToUseButton language={language} />
      <DownloadButton language={language} />
    </Stack>
  )
}
