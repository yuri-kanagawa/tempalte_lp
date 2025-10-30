import { NextLink, NextLinkProps } from 'src/ui/core/Link/NextLink'
import { TypographyProps } from '@mui/material/Typography/Typography'
import React, { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'
import { ClientLink } from './ClientLink'

type Props = Omit<NextLinkProps, 'children'> &
  TypographyProps & {
    currentPath: string
  }
export const LinkText: FC<Props> = ({ pathname, query, currentPath, ...rest }) => {
  const isRootPage = currentPath === '/'
  return (
    <>
      {!isRootPage && (
        <NextLink pathname={'/'} query={{ scroll: Scroll.CONTACT }}>
          <Typography sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}>
            {rest.children}
          </Typography>
        </NextLink>
      )}
      {isRootPage && <ClientLink onClick={rest.onClick}>{rest.children}</ClientLink>}
    </>
  )
}
