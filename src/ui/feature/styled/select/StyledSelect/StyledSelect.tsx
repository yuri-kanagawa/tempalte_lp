import styled from '@emotion/styled'
import { Select } from '@mui/material'
import { theme } from 'src/stores/thema'

export const StyledSelect = styled(Select)(() => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  '&.MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main
    }
  }
}))
