import { NextLink, NextLinkProps } from 'src/ui/core/Link/NextLink'
import { TypographyProps } from '@mui/material/Typography/Typography'
import React, { FC } from 'react'
import { scroll } from 'src/constants/scroll'
import { Typography } from '@mui/material'
import { TextBlackStyle } from 'src/styles/textStyle'

type Props = Omit<NextLinkProps, 'children'> &
  TypographyProps & {
    isRootPage: boolean
  }
export const HeaderText: FC<Props> = ({
  pathname,
  query,
  isRootPage,
  ...rest
}) => {
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
        <Typography
          sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}
          onClick={rest.onClick}>
          {rest.children}
        </Typography>
      )}
    </>
  )
}
