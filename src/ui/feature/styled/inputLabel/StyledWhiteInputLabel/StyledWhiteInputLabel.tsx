import styled from '@emotion/styled'
import { InputLabel } from '@mui/material'

export const StyledWhiteInputLabel = styled(InputLabel)((props) => ({
  color: '',
  '&.Mui-focused': {
    color: 'white'
  }
}))
