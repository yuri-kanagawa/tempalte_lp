'use client'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { titleFontSize } from 'src/styles/fontStyle'
import { Scroll } from '@lib/scrolls'
import { APP_STORE_URL, GOOGLE_STORE_URL } from 'src/constants/urls'
import type { Language } from 'src/domains/valueObjects/language'
import { QueryScrollAnchor } from 'src/ui/fragments'

type Props = {
  language: Language
}

export const DownloadBox: React.FC<Props> = ({ language }) => {
  // const { isLessDesktop, isDesktopSize } = useMediaQuerySize()
  // const buttonWidth = useMemo(() => {
  //   if (isLessDesktop) return 150
  //   if (isDesktopSize) return 300
  // }, [isDesktopSize, isLessDesktop])

  const locale = language.locale
  const onClickAppStore = () => open(APP_STORE_URL, '_blank')
  const onClickGoogleStore = () => open(GOOGLE_STORE_URL, '_blank')
  return (
    <Box
      id={Scroll.DOWNLOAD}
      sx={{
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        py: 10
      }}
    >
      <QueryScrollAnchor id={Scroll.DOWNLOAD} queryValue={Scroll.DOWNLOAD} />
      <Stack spacing={4}>
        <Typography
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            ...titleFontSize
          }}
        >
          {locale.words.download}
        </Typography>
        <Grid container gap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
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
              }}
            >
              <Image src={'/images/app-store.svg'} alt="appStore" fill onClick={onClickAppStore} />
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
            }}
          >
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
