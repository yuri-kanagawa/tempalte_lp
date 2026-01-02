'use client'

import { MenuItem, Typography, SelectChangeEvent, Select } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import React from 'react'
import { menuItemStyle } from './utils'
import { Locale } from 'src/domains/valueObjects/locale'
import { usePathname, useRouter } from 'next/navigation'
import { theme } from 'src/config/theme'

type Props = {
  language: Locale
}

export const LanguageSelect: React.FC<Props> = ({ language }) => {
  const router = useRouter()
  const pathname = usePathname() ?? '/'
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const segments = normalizedPath.split('/').filter(Boolean)

  const [firstSegment, ...restSegments] = segments
  const isLocaleSegment = firstSegment != null && firstSegment in Locale.LANGUAGES
  const baseSegments = isLocaleSegment ? restSegments : segments
  const basePath =
    baseSegments.length > 0
      ? `/${baseSegments.join('/')}`
      : isLocaleSegment
      ? '/'
      : normalizedPath || '/'

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const targetLang = String(event.target.value)
    const isDefaultLang = targetLang === Locale.default().value
    const nextPath = isDefaultLang ? basePath : `/${targetLang}${basePath === '/' ? '' : basePath}`
    router.push(nextPath)
  }

  return (
    <Select
      sx={{
        minWidth: 200,
        height: 50,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        '& .MuiSelect-select': { color: 'text.primary' },
        '& .MuiSvgIcon-root': { color: 'text.primary' },
        '&.MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: theme.palette.secondary.main
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.secondary.main
          }
        }
      }}
      value={language.value}
      startAdornment={<TranslateIcon />}
      inputProps={{ MenuProps: { disableScrollLock: true } }}
      onChange={handleChange}
      renderValue={(value) => {
        const key = String(value || Locale.default().value)
        return Locale.LANGUAGES[key as keyof typeof Locale.LANGUAGES]
      }}
    >
      {Locale.getAllLanguages().map((e, index) => (
        <MenuItem key={`item ${index}`} value={e.key} sx={menuItemStyle}>
          <Typography>{e.label}</Typography>
        </MenuItem>
      ))}
    </Select>
  )
}
