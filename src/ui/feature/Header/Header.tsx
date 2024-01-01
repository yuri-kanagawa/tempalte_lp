'use client'
import { AppBar, Box, Fade, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocale } from 'src/hooks/useLocal'
import IconButton from '@mui/material/IconButton'

import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderRight } from 'src/ui/feature/Header/internal/HeaderRight/HeaderRight'
import { common } from 'src/locales/common'
import { scrollToTop } from 'src/utils/scroll'
import { TextBlackStyle } from 'src/styles/textStyle'

export const Header: React.FC = () => {
  const { t } = useLocale()
  const { isMobileSize } = useMediaQuerySize()

  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const isMobileWithOpenMenu = isOpen && isMobileSize
  return (
    <AppBar
      sx={{
        backgroundColor: 'white'
      }}>
      <Toolbar>
        <Typography sx={TextBlackStyle} onClick={scrollToTop}>
          {common.app}
        </Typography>
        <Box flexGrow={1} />
        {isMobileSize ? (
          <IconButton
            size="large"
            edge="start"
            sx={{ color: 'black' }}
            onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>
        ) : (
          <HeaderRight key={1} />
        )}
      </Toolbar>

      {isMobileWithOpenMenu && (
        <Fade in={isMobileWithOpenMenu}>
          <Stack spacing={2} px={5} pb={2}>
            <HeaderRight key={2} />
          </Stack>
        </Fade>
      )}
    </AppBar>
  )
}
