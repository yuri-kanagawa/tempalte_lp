'use client'

import { NextLink, NextLinkProps } from 'src/ui/cores/NextLink/NextLink'
import { TypographyProps } from '@mui/material/Typography/Typography'
import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'
import { ClientLink } from './ClientLink'
import { usePathname } from 'next/navigation'

type Props = Omit<NextLinkProps, 'children'> &
  TypographyProps & {
    children: ReactNode
  }
export const LinkText: FC<Props> = ({ pathname, query, children, onClick, sx, ...rest }) => {
  const currentPath = usePathname()
  const segments = currentPath.split('/').filter(Boolean)
  const isRootPage = segments.length === 0 || (segments.length === 1 && segments[0].length === 2)
  if (!isRootPage) {
    return (
      <NextLink pathname={pathname} query={query}>
        <Typography
          sx={{
            ...TextBlackStyle,
            mr: 2,
            textAlign: 'center',
            ...sx
          }}
          {...rest}
        >
          {children}
        </Typography>
      </NextLink>
    )
  }

  return (
    <ClientLink onClick={onClick} sx={sx} {...rest}>
      {children}
    </ClientLink>
  )
}
