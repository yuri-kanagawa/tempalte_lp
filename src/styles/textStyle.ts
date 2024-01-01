export const TextWhiteStyle = {
  color: 'silver',
  '&:hover': { color: 'white' }
} as const

export const TextBlackStyle = {
  // color: '#757575',
  // '&:hover': { color: 'black' }
  color: 'black',
  '&:hover': { color: '#757575' }
} as const

export const getTextColorStyle = (isBackgroundBlack: boolean) => {
  if (isBackgroundBlack) return TextWhiteStyle
  else return TextBlackStyle
}
