import { animateScroll } from 'react-scroll'
import { Scroll } from '@lib/scrolls'

export const scrollToTop = () => animateScroll.scrollToTop()
export const isApp = (value: string) => value == Scroll.APP
export const isContact = (value: string) => value == Scroll.CONTACT
export const isDownload = (value: string) => value == Scroll.DOWNLOAD

export const isHowToUse = (value: string) => value == Scroll.HOW_TO_USE
