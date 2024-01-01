import styled from '@emotion/styled'
import { InputLabel } from '@mui/material'

export const StyledBlackInputLabel = styled(InputLabel)((props) => ({
  color: 'black',
  '&.Mui-focused': {
    color: 'black'
  }
}))
