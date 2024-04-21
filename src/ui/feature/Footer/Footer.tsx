'use client'
import React, { useCallback } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { IconButtonWhiteStyle } from 'src/styles/iconStyle'
import { useLocale } from 'src/hooks/useLocal'
import { langState } from 'src/stores/langContext'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/navigation'
import { route } from 'src/constants/route'
import { getIsEnglish } from 'src/utils/language'

export const Footer: React.FC = () => {
  const { locale, t } = useLocale()
  const lang = useRecoilValue(langState)
  const router = useRouter()
  const onClickPrivacyPolicy = () =>
    router.push(route.privacyPolicy.index(lang))

  const onClickTerms = () => router.push(route.terms.index(lang))
  const onClickFaq = () => router.push(route.faq.index(lang))

  const onClickLedenm = useCallback(() => {
    if (getIsEnglish(locale)) return window.open('https://ledenm.com/')
    else return window.open(`https://ledenm.com/${locale}`)
  }, [locale])
  return (
    <Box
      py={2}
      sx={{
        background: 'black',
        color: 'white'
      }}>
      <Stack>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Grid item>
            <Typography>©&nbsp;&nbsp;</Typography>
          </Grid>
          <Grid item>
            <Typography sx={IconButtonWhiteStyle} onClick={onClickLedenm}>
              Lilium Eden
            </Typography>
          </Grid>
          <Grid item>
            <Typography>&nbsp;&nbsp;All Rights Reserved.</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2}>
          <Grid item>
            <Typography
              sx={IconButtonWhiteStyle}
              onClick={onClickPrivacyPolicy}>
              {t.privacyPolicy}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={IconButtonWhiteStyle} onClick={onClickTerms}>
              {t.terms}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={IconButtonWhiteStyle} onClick={onClickFaq}>
              {t.faq}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
