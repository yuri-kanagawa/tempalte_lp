'use client'

import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import React, { type ReactNode } from 'react'

type Props = {
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  children: ReactNode
}

export const HeroContent: React.FC<Props> = ({ imageSrc, imageAlt, imageWidth, imageHeight, children }) => {
  return (
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
        {children}
      </Grid>
      <Grid item>
        <DeviceFrameset device="iPhone 8" color="silver" zoom={0.8}>
          <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
        </DeviceFrameset>
      </Grid>
    </Grid>
  )
}

