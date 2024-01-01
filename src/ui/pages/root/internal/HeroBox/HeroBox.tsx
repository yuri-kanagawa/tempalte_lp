'use client'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { titleFontSize } from 'src/styles/fontStyle'
import { useLocale } from 'src/hooks/useLocal'
import { whiteButtonStyle } from 'src/styles/buttonStyle'

export const HeroBox = () => {
  const { t } = useLocale()
  return (
    <Box
      sx={{
        background: 'black',
        py: 5
      }}>
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        gap={2}>
        <Grid item>
          <Stack spacing={2}>
            <Typography
              sx={{
                color: 'white',
                whiteSpace: 'pre-wrap',
                ...titleFontSize
              }}>
              {t.heroText}
            </Typography>
            <Button variant={'outlined'} sx={whiteButtonStyle}>
              {t.download}
            </Button>
            <Button variant={'outlined'} sx={whiteButtonStyle}>
              {t.howToUse}
            </Button>
          </Stack>
        </Grid>
        <Grid item>
          <DeviceFrameset device="iPhone 8" color="silver" zoom={0.8}>
            <Image
              src={'/images/lily.png'}
              alt="猫は最高に可愛い"
              width={300}
              height={553.6}
            />
          </DeviceFrameset>
        </Grid>
      </Grid>
    </Box>
  )
}
