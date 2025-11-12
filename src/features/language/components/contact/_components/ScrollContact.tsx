'use client'

import { Box, IconButton } from '@mui/material'
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
  const t = language.locale
  const snsLinks = t.links
  const iconButtonSx = useMemo(
    () =>
      ({
        ...IconButtonBlackStyle,
        width: 'clamp(120px, 14vw, 240px)',
        height: 'clamp(120px, 14vw, 240px)',
        borderRadius: '50%',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          ...IconButtonBlackStyle['&:hover']
        },
        '& svg': {
          fontSize: 'clamp(48px, 6vw, 128px)'
        }
      }) as const,
    []
  )

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(16px, 2vw, 32px)',
        flexWrap: 'nowrap',
        overflowX: 'visible',
        overflowY: 'visible'
      }}
    >
      {SOCIAL_LINKS.map(({ key, icon, label }) => {
        const href = snsLinks[key]
        if (!href) return null
        return (
          <Box
            key={key}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: '0 0 clamp(140px, 15vw, 260px)'
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
          </Box>
        )
      })}
    </Box>
  )
}
