import { SxProps, Theme } from '@mui/material'

const IconButtonWhiteStyle = {
  color: 'silver',
  '&:hover': { color: 'white' }
} as const

const IconButtonBlackStyle = {
  color: 'black',
  '&:hover': { color: '#757575' }
} as const

const TextWhiteStyle = {
  color: 'silver',
  '&:hover': { color: 'white' }
} as const

const TextBlackStyle = {
  color: 'black',
  '&:hover': { color: '#757575' }
} as const

const getTextColorStyle = (isBackgroundBlack: boolean) => {
  if (isBackgroundBlack) return TextWhiteStyle
  else return TextBlackStyle
}

const whiteButtonStyle: SxProps<Theme> = {
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    color: 'silver',
    borderColor: 'silver'
  }
}

const titleFontSize: SxProps<Theme> = { fontSize: 40 }

export const styles = {
  button: {
    white: whiteButtonStyle
  },
  typography: {
    titleFontSize
  },
  iconButton: {
    white: IconButtonWhiteStyle,
    black: IconButtonBlackStyle
  },
  text: {
    white: TextWhiteStyle,
    black: TextBlackStyle,
    getColorStyle: getTextColorStyle
  },
  video: {
    getMovieHeight: (width: number): number => (width * 9) / 16
  }
}

