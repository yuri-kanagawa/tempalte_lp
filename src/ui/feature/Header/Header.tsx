'use client'
import {
  AppBar,
  Box,
  Collapse,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import IconButton from '@mui/material/IconButton'

import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderRight } from 'src/ui/feature/Header/internal/HeaderRight/HeaderRight'
import { common } from 'src/locales/common'

import { TextBlackStyle } from 'src/styles/textStyle'
import { LanguageKey } from 'src/constants/language'

type Props = {
  lang: LanguageKey
  currentPath: string
}

export const Header: React.FC<Props> = ({ lang, currentPath }) => {
  const { isLessTabletSize } = useMediaQuerySize()

  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const isMobileWithOpenMenu = useMemo(
    () => isOpen && isLessTabletSize,
    [isLessTabletSize, isOpen]
  )

  return (
    <AppBar
      sx={{
        backgroundColor: 'white'
      }}
      position={'sticky'}>
      <Toolbar>
        <Typography
          sx={TextBlackStyle}
          // onClick={onClickHero}
        >
          {common.app}
        </Typography>
        <Box flexGrow={1} />
        {isLessTabletSize ? (
          <IconButton
            size="large"
            edge="start"
            sx={{ color: 'black' }}
            onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>
        ) : (
          <HeaderRight key={1} lang={lang} currentPath={currentPath} />
        )}
      </Toolbar>

      <Collapse in={isMobileWithOpenMenu}>
        <Toolbar>
          <Stack spacing={2} sx={{ width: '100%' }} pb={2}>
            <HeaderRight key={2} lang={lang} currentPath={currentPath} />
          </Stack>
        </Toolbar>
      </Collapse>
    </AppBar>
  )
}
