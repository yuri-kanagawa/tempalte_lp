'use client'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { titleFontSize } from 'src/styles/fontStyle'
import { scroll } from 'src/constants/scroll'
import { APP_STORE_URL, GOOGLE_STORE_URL } from 'src/constants/urls'
import type { Language } from 'src/domains/valueObjects/language'
import { getLocaleFile } from 'src/utils/language'
import { Scroll } from './Internal'

type Props = {
  language: Language
}

export const DownloadBox: React.FC<Props> = ({ language }) => {
  // const { isLessDesktop, isDesktopSize } = useMediaQuerySize()
  // const buttonWidth = useMemo(() => {
  //   if (isLessDesktop) return 150
  //   if (isDesktopSize) return 300
  // }, [isDesktopSize, isLessDesktop])

  const t = getLocaleFile(language)
  const onClickAppStore = () => open(APP_STORE_URL, '_blank')
  const onClickGoogleStore = () => open(GOOGLE_STORE_URL, '_blank')
  return (
    <Box
      id={scroll.download}
      sx={{
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        py: 10
      }}>
      <Scroll />
      <Stack spacing={4}>
        <Typography
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            ...titleFontSize
          }}>
          {t.words.download}
        </Typography>
        <Grid
          container
          gap={2}
          sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item>
            <Box
              sx={{
                width: {
                  xs: 150, // モバイルサイズ
                  sm: 200,
                  md: 300
                },
                height: {
                  xs: 150, // モバイルサイズ
                  sm: 200,
                  md: 300
                },
                position: 'relative' // 必須
              }}>
              <Image
                src={'/images/app-store.svg'}
                alt="appStore"
                fill
                onClick={onClickAppStore}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              width: {
                xs: 150, // モバイルサイズ
                sm: 200,
                md: 300
              },
              height: {
                xs: 150, // モバイルサイズ
                sm: 200,
                md: 300
              },
              position: 'relative' // 必須
              // background: 'red'
            }}>
            <Image
              src="/images/google-store.svg"
              alt="GoogleStore"
              fill // 親要素に完全にフィット
              onClick={onClickGoogleStore}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
