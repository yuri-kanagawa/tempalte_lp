import { FormControl, MenuItem, Typography } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import React, { useCallback, useState } from 'react'
import { StyledSelect } from 'src/ui/feature/styled/select/StyledSelect'
import { menuItemStyle } from 'src/ui/feature/Header/internal/commons/LanguageSelect/utils'
import { getIsEnglish, getLanguageLabel } from 'src/utils/language'
import { LanguageKey, LANGUAGES } from 'src/constants/language'
import { NextLink } from 'src/ui/core/Link/NextLink'

type Props = {
  lang: LanguageKey
  currentPath: string
}

export const LanguageSelect: React.FC<Props> = ({ lang, currentPath }) => {
  return (
    <StyledSelect
      sx={{ minWidth: 200, height: 50 }}
      value={lang}
      startAdornment={<TranslateIcon />}
      inputProps={{ MenuProps: { disableScrollLock: true } }}>
      {LANGUAGES.map((e, index) => (
        <MenuItem key={`item ${index}`} value={e} sx={menuItemStyle}>
          <NextLink pathname={e === 'en' ? currentPath : `${e}${currentPath}`}>
            <Typography>{getLanguageLabel(e)}</Typography>
          </NextLink>
        </MenuItem>
      ))}
    </StyledSelect>
  )
}
