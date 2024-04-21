'use client'
import {
  AppBar,
  Box,
  Collapse,
  Fade,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useLocale } from 'src/hooks/useLocal'
import IconButton from '@mui/material/IconButton'

import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderRight } from 'src/ui/feature/Header/internal/HeaderRight/HeaderRight'
import { common } from 'src/locales/common'

import { TextBlackStyle } from 'src/styles/textStyle'
import { getIsRoot } from 'src/utils/url'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { route } from 'src/constants/route'
import { useRecoilValue } from 'recoil'
import { scrollState } from 'src/stores/scrollContext'

type Props = {
  onClickHero: () => void
  onClickContact: () => void
}

export const Header: React.FC<Props> = (props: Props) => {
  const { onClickHero, onClickContact } = props
  const { locale } = useLocale()
  const { isLessTabletSize } = useMediaQuerySize()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => setIsOpen(!isOpen)

  const router = useRouter()

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
        <Typography sx={TextBlackStyle} onClick={onClickHero}>
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
          <HeaderRight key={1} onClickContact={onClickContact} />
        )}
      </Toolbar>

      <Collapse in={isMobileWithOpenMenu}>
        <Toolbar>
          <Stack spacing={2} sx={{ width: '100%' }} pb={2}>
            <HeaderRight key={2} onClickContact={onClickContact} />
          </Stack>
        </Toolbar>
      </Collapse>
    </AppBar>
  )
}
