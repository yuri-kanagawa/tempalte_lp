'use client'
import { Button, ButtonProps } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import React, { FC } from 'react'

type Props = ButtonProps
export const ScrollButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <Button variant={'outlined'} sx={whiteButtonStyle} {...rest}>
      {children}
    </Button>
  )
}
