import { getLocale } from 'src/utils/locale'
import { usePathname } from 'next/navigation'
import { getUrlFirstSlash } from 'src/utils/url'
import { useRecoilValue } from 'recoil'
import { langState } from 'src/stores/langContext'

export const useLocale = () => {
  const pathname = usePathname()
  const locale = getUrlFirstSlash(pathname)
  const lang = useRecoilValue(langState)
  const t = getLocale(lang)

  return { locale, t }
}
