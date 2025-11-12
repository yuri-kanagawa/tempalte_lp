import { NextLink, NextLinkProps } from 'src/ui/cores/NextLink/NextLink'
import { TypographyProps } from '@mui/material/Typography/Typography'
import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'
import { ClientLink } from './ClientLink'

type Props = Omit<NextLinkProps, 'children'> &
  TypographyProps & {
    currentPath: string
    children: ReactNode
  }
export const LinkText: FC<Props> = ({
  pathname,
  query,
  currentPath,
  children,
  onClick,
  sx,
  ...rest
}) => {
  const isRootPage = currentPath === '/'
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
