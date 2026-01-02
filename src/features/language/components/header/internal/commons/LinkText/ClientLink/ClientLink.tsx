'use client'
import { Typography } from '@mui/material'
import React, { FC } from 'react'
import { TypographyProps } from '@mui/material/Typography/Typography'
import { styles } from 'src/config/styles'

type Props = TypographyProps
export const ClientLink: FC<Props> = ({ onClick, children, sx, ...rest }) => {
  return (
    <Typography
      sx={{
        ...styles.text.black,
        mr: 2,
        textAlign: 'center',
        ...sx
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Typography>
  )
}
