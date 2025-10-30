export class Scroll {
  static readonly APP = 'app' as const
  static readonly CONTACT = 'contact' as const
  static readonly HOW_TO_USE = 'howToUse' as const
  static readonly DOWNLOAD = 'download' as const

  static readonly SCROLL_IDS = {
    [Scroll.APP]: Scroll.APP,
    [Scroll.CONTACT]: Scroll.CONTACT,
    [Scroll.HOW_TO_USE]: Scroll.HOW_TO_USE,
    [Scroll.DOWNLOAD]: Scroll.DOWNLOAD
  } as const

  static scrollToApp(): void {
    const element = document.getElementById(Scroll.APP)
    if (element == null) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  static scrollToContact(): void {
    const element = document.getElementById(Scroll.CONTACT)
    if (element == null) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  static scrollToHowToUse(): void {
    const element = document.getElementById(Scroll.HOW_TO_USE)
    if (element == null) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  static scrollToDownload(): void {
    const element = document.getElementById(Scroll.DOWNLOAD)
    if (element == null) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  static scrollToElement(id: string): void {
    const element = document.getElementById(id)
    if (element == null) return
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
