import { styles } from 'src/config/styles'

export const getTextStyle = (isBackgroundBlack: boolean) => {
  return { ...styles.text.getColorStyle(isBackgroundBlack), mr: 2 }
}
