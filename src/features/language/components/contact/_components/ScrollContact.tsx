'use client'

import { Grid, Typography, IconButton } from '@mui/material'
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
    <Grid container direction="column" alignItems="center" sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: 'clamp(24px, 3.2vw, 36px)',
          fontWeight: 600,
          color: 'black',
          mb: 'clamp(12px, 1vw, 18px)'
        }}
      >
        {t.words.contact}
      </Typography>
      <Grid
        container
        justifyContent="center"
        sx={{
          pb: 'clamp(12px, 1vw, 18px)',
          rowGap: 'clamp(16px, 2vw, 32px)',
          columnGap: 'clamp(16px, 2vw, 32px)'
        }}
      >
        {SOCIAL_LINKS.map(({ key, icon, label }) => {
          const href = snsLinks[key]
          if (!href) return null
          return (
            <Grid item key={key}>
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
    </Grid>
  )
}
