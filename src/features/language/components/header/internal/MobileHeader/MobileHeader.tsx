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
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
  currentPath: string
}
export const MobileHeader: FC<Props> = ({ language, currentPath }) => {
  const { isLessTabletSize } = useMediaQuerySize()

  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const isMobileWithOpenMenu = useMemo(
    () => isOpen && isLessTabletSize,
    [isLessTabletSize, isOpen]
  )
  return (
    <TopBar
      sx={{
        backgroundColor: 'white',
        display: {
          xs: 'inline-flex',
          sm: 'inline-flex',
          md: 'none'
        }
      }}>
      <Toolbar>
        <AppLink language={language} currentPath={currentPath} />
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
          onClick={onClickMenu}>
          <MenuIcon />
        </IconButton>
        {!isLessTabletSize && (
          <HeaderMenu language={language} currentPath={currentPath} />
        )}
      </Toolbar>
      <Collapse in={isMobileWithOpenMenu}>
        <Toolbar>
          <Stack spacing={2} sx={{ width: '100%' }} pb={2}>
            <HeaderMenu language={language} currentPath={currentPath} />
          </Stack>
        </Toolbar>
      </Collapse>
    </TopBar>
  )
}
