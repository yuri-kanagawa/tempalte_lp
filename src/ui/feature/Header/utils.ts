import { getTextColorStyle } from 'src/styles/textStyle'

export const getTextStyle = (isBackgroundBlack: boolean) => {
  return { ...getTextColorStyle(isBackgroundBlack), mr: 2 }
}
