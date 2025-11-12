'use client'

import { MenuItem, Typography, SelectChangeEvent } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import React from 'react'
import { StyledSelect } from 'src/ui/feature/styled/select/StyledSelect'
import { menuItemStyle } from './utils'
import { Language } from 'src/domains/valueObjects/language'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  language: Language
}

export const LanguageSelect: React.FC<Props> = ({ language }) => {
  const router = useRouter()
  const pathname = usePathname() ?? '/'
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const segments = normalizedPath.split('/').filter(Boolean)

  const [firstSegment, ...restSegments] = segments
  const isLocaleSegment = firstSegment != null && firstSegment in Language.LANGUAGES
  const baseSegments = isLocaleSegment ? restSegments : segments
  const basePath =
    baseSegments.length > 0
      ? `/${baseSegments.join('/')}`
      : isLocaleSegment
      ? '/'
      : normalizedPath || '/'

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const targetLang = String(event.target.value)
    const isDefaultLang = targetLang === Language.default().value
    const nextPath = isDefaultLang ? basePath : `/${targetLang}${basePath === '/' ? '' : basePath}`
    router.push(nextPath)
  }

  return (
    <StyledSelect
      sx={{
        minWidth: 200,
        height: 50,
        color: 'text.primary',
        '& .MuiSelect-select': { color: 'text.primary' },
        '& .MuiSvgIcon-root': { color: 'text.primary' }
      }}
      value={language.value}
      startAdornment={<TranslateIcon />}
      inputProps={{ MenuProps: { disableScrollLock: true } }}
      onChange={handleChange}
      renderValue={(value) => {
        const key = String(value || Language.default().value)
        return Language.LANGUAGES[key as keyof typeof Language.LANGUAGES]
      }}
    >
      {Language.getAllLanguages().map((e, index) => (
        <MenuItem key={`item ${index}`} value={e.key} sx={menuItemStyle}>
          <Typography>{e.label}</Typography>
        </MenuItem>
      ))}
    </StyledSelect>
  )
}
