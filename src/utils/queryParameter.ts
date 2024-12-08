export const removeQueryParameter = (queryKey: string) => {
  const url = new URL(window.location.href)

  // `scroll` パラメータを取得
  const scrollTarget = url.searchParams.get(queryKey)

  if (scrollTarget) {
    // `scroll` クエリパラメータを削除
    url.searchParams.delete(queryKey)
    window.history.replaceState({}, document.title, url.toString()) // URL を更新
  }
}
export const removeScrollQueryParameter = (): void =>
  removeQueryParameter('scroll')

export const addQueryParamToUrl = (key: string, value: string): void => {
  // 現在の URL を取得
  const url = new URL(window.location.href)

  // クエリパラメータを追加
  url.searchParams.set(key, value)

  // URL を更新（ページ遷移なし）
  window.history.replaceState({}, document.title, url.toString())
}

export const addScrollQueryParameter = (value: string) =>
  addQueryParamToUrl('scroll', value)
