import { animateScroll } from 'react-scroll'
import { scroll } from 'src/constants/scroll'

export const scrollToTop = () => animateScroll.scrollToTop()
export const isApp = (value: string) => value == scroll.app
export const isContact = (value: string) => value == scroll.contact
export const isDownload = (value: string) => value == scroll.download

export const isHowToUse = (value: string) => value == scroll.howToUse
