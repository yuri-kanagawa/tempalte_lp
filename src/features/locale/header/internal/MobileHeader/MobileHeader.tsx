'use client'
import {
  AppLink,
  ContactLink,
  DownLoadLink,
  HowToUseLink,
  LanguageSelect,
  TopBar
} from '../commons'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import React, { FC, useMemo, useState } from 'react'
import { Box, Collapse, Stack, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderMenu } from './HeaderMenu'
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  locale: Locale
}
export const MobileHeader: FC<Props> = ({ locale }) => {
  const { isLessTabletSize } = useMediaQuerySize()

  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const isMobileWithOpenMenu = useMemo(() => isOpen && isLessTabletSize, [isLessTabletSize, isOpen])
  return (
    <TopBar
      sx={{
        backgroundColor: 'white',
        display: {
          xs: 'inline-flex',
          sm: 'inline-flex',
          md: 'none'
        }
      }}
    >
      <Toolbar>
        <AppLink locale={locale} />
        <Box flexGrow={1} />
        <IconButton
          size="large"
          edge="start"
          sx={{
            color: 'black',
            display: {
              xs: 'inline-flex',
              sm: 'inline-flex',
              md: 'none'
            }
          }}
          onClick={onClickMenu}
        >
          <MenuIcon />
        </IconButton>
        {!isLessTabletSize && <HeaderMenu locale={locale} />}
      </Toolbar>
      <Collapse in={isMobileWithOpenMenu}>
        <Toolbar>
          <Stack spacing={2} sx={{ width: '100%' }} pb={2}>
            <HeaderMenu locale={locale} />
          </Stack>
        </Toolbar>
      </Collapse>
    </TopBar>
  )
}
