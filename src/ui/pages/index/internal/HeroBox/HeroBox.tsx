import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import React from 'react'
import type { Language } from 'src/domains/valueObjects/language'
import { Texts } from './internal'
import { Scroll } from '@lib/scrolls'
import { QueryScrollAnchor } from 'src/ui/fragments'

type Props = {
  language: Language
}

export const HeroBox: React.FC<Props> = ({ language }) => {
  return (
    <Box
      id={Scroll.APP}
      sx={{
        background: 'black',
        py: 5
      }}
    >
      <QueryScrollAnchor id={Scroll.APP} queryValue={Scroll.APP} />
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        gap={2}
      >
        <Grid item>
          <Texts language={language} />
        </Grid>
        <Grid item>
          <DeviceFrameset device="iPhone 8" color="silver" zoom={0.8}>
            <Image src={'/images/lily.png'} alt="猫は最高に可愛い" width={300} height={553.6} />
          </DeviceFrameset>
        </Grid>
      </Grid>
    </Box>
  )
}
