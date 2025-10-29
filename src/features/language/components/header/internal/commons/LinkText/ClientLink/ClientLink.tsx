'use client'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'
import React, { FC, ReactNode } from 'react'
import { TypographyProps } from '@mui/material/Typography/Typography'

type Props = {} & TypographyProps
export const ClientLink: FC<Props> = ({ onClick, children }) => {
  return (
    <Typography
      sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}
      onClick={onClick}>
      {children}
    </Typography>
  )
}
