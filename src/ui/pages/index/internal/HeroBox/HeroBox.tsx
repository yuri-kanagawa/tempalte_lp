import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import React from 'react'
import type { Language } from 'src/domains/valueObjects/language'
import { getLocaleFile } from 'src/utils/language'
import { Texts } from './internal'

type Props = {
  language: Language
}

export const HeroBox: React.FC<Props> = ({ language }) => {
  const t = getLocaleFile(language.value)
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
          <Texts lang={language.value} />
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
