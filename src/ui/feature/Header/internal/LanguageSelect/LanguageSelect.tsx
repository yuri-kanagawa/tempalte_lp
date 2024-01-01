'use client'

import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { langState } from 'src/stores/langContext'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRecoilState } from 'recoil'
import React, { useCallback } from 'react'
import { StyledSelect } from 'src/ui/feature/styled/select/StyledSelect'
import { menuItemStyle } from 'src/ui/feature/Header/internal/LanguageSelect/utils'
import { getLanguageLabel } from 'src/utils/language'
import { LanguageKey, LANGUAGES } from 'src/constants/language'

export const LanguageSelect: React.FC = () => {
  const [lang, setLang] = useRecoilState(langState)
  // const handleChange = useCallback(
  //   (event: SelectChangeEvent<unknown>) =>
  //     changeLang(setLang, String(event.target.value)),
  //   [setLang]
  // )

  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      console.log(event.target.value)
      setLang(event.target.value as LanguageKey)
    },
    [setLang]
  )

  return (
    <FormControl>
      <StyledSelect
        sx={{ minWidth: 200, height: 50 }}
        onChange={handleChange}
        value={lang}
        startAdornment={<TranslateIcon />}
        inputProps={{ MenuProps: { disableScrollLock: true } }}>
        {LANGUAGES.map((e, index) => (
          <MenuItem key={index} value={e} sx={menuItemStyle}>
            {getLanguageLabel(e)}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}
