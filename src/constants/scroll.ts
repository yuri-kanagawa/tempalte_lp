import { LANGUAGE } from 'src/constants/language'

export const scroll = {
  app: 'app',
  contact: 'contact',
  howToUse: 'howToUse',
  download: 'download'
}
export type ScrollKey = keyof typeof scroll

export const onClickApp = () => {
  const element = document.getElementById(scroll.app)
  if (element == null) return
  element.scrollIntoView({ behavior: 'smooth' })
}

export const onClickHowToUse = () => {
  const element = document.getElementById(scroll.howToUse)
  if (element == null) return
  element.scrollIntoView({ behavior: 'smooth' })
}
export const onClickDownload = () => {
  const element = document.getElementById(scroll.download)
  if (element == null) return
  element.scrollIntoView({ behavior: 'smooth' })
}

export const onClickContact = () => {
  const element = document.getElementById(scroll.contact)
  if (element == null) return
  element.scrollIntoView({ behavior: 'smooth' })
}
