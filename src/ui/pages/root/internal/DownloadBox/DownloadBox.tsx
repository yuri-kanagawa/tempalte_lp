import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { titleFontSize } from 'src/styles/fontStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { MutableRefObject, useMemo } from 'react'
import { useLocale } from 'src/hooks/useLocal'
import { scroll } from 'src/constants/scroll'
import { APP_STORE_URL, GOOGLE_STORE_URL } from 'src/constants/urls'

export const DownloadBox: React.FC = () => {
  const { isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const buttonWidth = useMemo(() => {
    if (isLessDesktop) return 150
    if (isDesktopSize) return 300
  }, [isDesktopSize, isLessDesktop])

  const { t } = useLocale()
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
      <Stack spacing={4}>
        <Typography
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            ...titleFontSize
          }}>
          {t.download}
        </Typography>
        <Grid
          container
          gap={2}
          sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item>
            <Image
              src={'/images/app-store.svg'}
              alt="appStore"
              width={buttonWidth}
              height={100}
              onClick={onClickAppStore}
            />
          </Grid>
          <Grid item>
            <Image
              src={'/images/google-store.svg'}
              alt="GoogleStore"
              width={buttonWidth}
              height={100}
              onClick={onClickGoogleStore}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
