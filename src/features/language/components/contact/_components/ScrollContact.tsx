'use client'

import { Box, Grid, IconButton, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { IconButtonBlackStyle } from 'src/styles/iconStyle'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import type { Language } from 'src/domains/valueObjects/language'
import { FC, useMemo } from 'react'

type Props = {
  language: Language
}

const SOCIAL_LINKS = [
  { key: 'twitter', icon: <AiOutlineTwitter />, label: 'Twitter' },
  { key: 'instagram', icon: <AiOutlineInstagram />, label: 'Instagram' },
  { key: 'youtube', icon: <AiFillYoutube />, label: 'YouTube' },
  { key: 'tiktok', icon: <BsTiktok />, label: 'TikTok' }
] as const

export const ScrollContact: FC<Props> = ({ language }) => {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  const t = language.locale
  const snsLinks = t.links
  const iconButtonSx = useMemo(
    () =>
      ({
        ...IconButtonBlackStyle,
        width: 'clamp(110px, 12vw, 200px)',
        height: 'clamp(110px, 12vw, 200px)',
        borderRadius: '50%',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          ...IconButtonBlackStyle['&:hover']
        },
        '& svg': {
          fontSize: 'clamp(40px, 5vw, 110px)'
        }
      }) as const,
    []
  )

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        wrap={isMdUp ? 'nowrap' : 'wrap'}
        spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
        sx={{
          width: '100%',
          maxWidth: 1100,
          px: { xs: 'clamp(12px, 5vw, 32px)', md: 'clamp(16px, 3vw, 40px)' },
          overflowX: { xs: 'hidden', md: 'auto' },
          overflowY: 'visible',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            height: '6px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '999px'
          }
        }}
      >
        {SOCIAL_LINKS.map(({ key, icon, label }) => {
          const href = snsLinks[key]
          if (!href) return null
          return (
            <Grid
              key={key}
              item
              xs={6}
              md="auto"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: { xs: 'auto', md: 120 },
                maxWidth: 200
              }}
            >
              <IconButton
                sx={iconButtonSx}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </IconButton>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
