export class QueryParameter {
  private static readonly SCROLL_KEY = 'scroll'

  static get(key: string): string | null {
    if (typeof window === 'undefined') return null
    const url = new URL(window.location.href)
    return url.searchParams.get(key)
  }

  static set(key: string, value: string): void {
    QueryParameter.updateUrl((url) => {
      url.searchParams.set(key, value)
      return true
    })
  }

  static remove(key: string): void {
    QueryParameter.updateUrl((url) => {
      if (!url.searchParams.has(key)) return false
      url.searchParams.delete(key)
      return true
    })
  }

  static setScroll(value: string): void {
    QueryParameter.set(QueryParameter.SCROLL_KEY, value)
  }

  static removeScroll(): void {
    QueryParameter.remove(QueryParameter.SCROLL_KEY)
  }

  private static updateUrl(mutator: (url: URL) => boolean): void {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    const hasChanged = mutator(url)
    if (!hasChanged) return
    window.history.replaceState({}, document.title, url.toString())
  }
}


