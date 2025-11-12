'use client'
import { Grid, Typography } from '@mui/material'
import { NextLink } from 'src/ui/core/Link/NextLink'
import IconButton from '@mui/material/IconButton'
import { IconButtonBlackStyle } from 'src/styles/iconStyle'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

import { BsTiktok } from 'react-icons/bs'
import { FaBilibili } from 'react-icons/fa6'
import type { Language } from 'src/domains/valueObjects/language'
import { FC, useEffect, useMemo, useState } from 'react'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const ScrollContact: FC<Props> = ({ language }) => {
  const t = language.locale
  const isChinese = language.value === 'zh'
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { iconSize, iconFontSize, gap, titleSize, titleMargin } = useMemo(() => {
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
    const isDesktop = windowWidth >= 1024
    const size = clamp(windowWidth * (isDesktop ? 0.14 : 0.18), 100, 640)
    const fontSize = clamp(size * 0.62, 40, 200)
    const spacing = clamp((size * 0.1) / 8, 3.5, 6)
    const title = clamp(windowWidth * (isDesktop ? 0.032 : 0.045), 24, 36)
    const margin = clamp(windowWidth * 0.008, 10, 18)
    return {
      iconSize: size,
      iconFontSize: fontSize,
      gap: spacing,
      titleSize: title,
      titleMargin: margin
    }
  }, [windowWidth])

  const iconButtonSx = useMemo(
    () =>
      ({
        ...IconButtonBlackStyle,
        width: iconSize,
        height: iconSize,
        borderRadius: '50%',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          ...IconButtonBlackStyle['&:hover']
        },
        '& svg': {
          fontSize: iconFontSize
        }
      }) as const,
    [iconFontSize, iconSize]
  )

  return (
    <Grid container direction="column" alignItems="center" sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: titleSize,
          fontWeight: 600,
          color: 'black',
          mb: titleMargin
        }}
      >
        {t.words.contact}
      </Typography>
      <Grid container justifyContent="center" sx={{ pb: titleMargin, rowGap: gap, columnGap: gap }}>
        <Grid item>
          <NextLink pathname={''}>
            <IconButton sx={iconButtonSx}>
              <AiOutlineTwitter />
            </IconButton>
          </NextLink>
        </Grid>
        <Grid item>
          <IconButton sx={iconButtonSx}>
            <AiOutlineInstagram />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={iconButtonSx}>
            <AiFillYoutube />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={iconButtonSx}>
            <BsTiktok />
          </IconButton>
        </Grid>

        {isChinese && (
          <Grid item>
            <IconButton sx={iconButtonSx}>
              <FaBilibili />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
