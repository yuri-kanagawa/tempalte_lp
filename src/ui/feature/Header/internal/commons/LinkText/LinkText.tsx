import { NextLink, NextLinkProps } from 'src/ui/core/Link/NextLink'
import { TypographyProps } from '@mui/material/Typography/Typography'
import React, { FC } from 'react'
import { scroll } from 'src/constants/scroll'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'
import { ClientLink } from 'src/ui/feature/Header/internal/commons/LinkText/ClientLink'

type Props = Omit<NextLinkProps, 'children'> &
  TypographyProps & {
    currentPath: string
  }
export const LinkText: FC<Props> = ({
  pathname,
  query,
  currentPath,
  ...rest
}) => {
  const isRootPage = currentPath === '/'
  return (
    <>
      {!isRootPage && (
        <NextLink pathname={'/'} query={{ scroll: scroll.contact }}>
          <Typography sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}>
            {rest.children}
          </Typography>
        </NextLink>
      )}
      {isRootPage && (
        <ClientLink onClick={rest.onClick}>{rest.children}</ClientLink>
      )}
    </>
  )
}
