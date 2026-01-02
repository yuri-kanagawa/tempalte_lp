import { Stack, Typography } from '@mui/material'
import { styles } from 'src/config/styles'
import React, { FC } from 'react'
import { HowToUseButton } from './internal'
import { DownloadButton } from 'src/ui/pages/index/internal/HeroBox/internal/Texts/internal/DownloadButton/DownloadButton'
import type { Locale } from 'src/domains/valueObjects/locale'
import { enUS } from 'src/locales/en-US'

type Props = {
  locale: Locale
}
export const Texts: FC<Props> = ({ locale }) => {
  const t = locale?.translation
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
      <HowToUseButton locale={locale} />
      <DownloadButton locale={locale} />
    </Stack>
  )
}
