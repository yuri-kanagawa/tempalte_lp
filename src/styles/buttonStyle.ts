import { SxProps, Theme } from '@mui/material'

export const whiteButtonStyle: SxProps<Theme> = {
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    color: 'silver',
    borderColor: 'silver'
  }
}
