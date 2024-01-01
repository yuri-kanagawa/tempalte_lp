import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { titleFontSize } from 'src/styles/fontStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { useMemo } from 'react'
import { useLocale } from 'src/hooks/useLocal'

export const DownloadBox: React.FC = () => {
  const { isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const buttonWidth = useMemo(() => {
    if (isLessDesktop) return 150
    if (isDesktopSize) return 300
  }, [isDesktopSize, isLessDesktop])

  const { t } = useLocale()
  return (
    <Box
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
              onClick={() => console.log('d')}
            />
          </Grid>
          <Grid item>
            <Image
              src={'/images/google-store.svg'}
              alt="GoogleStore"
              width={buttonWidth}
              height={100}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
