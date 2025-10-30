import { MenuItem, Typography } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import React from 'react'
import { StyledSelect } from 'src/ui/feature/styled/select/StyledSelect'
import { menuItemStyle } from './utils'
import type { Language } from 'src/domains/valueObjects/language'
import { Language } from 'src/domains/valueObjects/language'
import { NextLink } from 'src/ui/core/Link/NextLink'

type Props = {
  language: Language
  currentPath: string
}

export const LanguageSelect: React.FC<Props> = ({ language, currentPath }) => {
  return (
    <StyledSelect
      sx={{ minWidth: 200, height: 50 }}
      value={language}
      startAdornment={<TranslateIcon />}
      inputProps={{ MenuProps: { disableScrollLock: true } }}
    >
      {Language.getAllLanguages().map((e, index) => (
        <MenuItem key={`item ${index}`} value={e.key} sx={menuItemStyle}>
          <NextLink pathname={e.key === 'en' ? currentPath : `${e.key}${currentPath}`}>
            <Typography>{e.label}</Typography>
          </NextLink>
        </MenuItem>
      ))}
    </StyledSelect>
  )
}
