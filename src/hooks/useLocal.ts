// // import { getLocaleFile } from 'src/utils/locale'
// import { usePathname } from 'next/navigation'
// import { getUrlLanguage } from 'src/utils/url'
// import { useRecoilValue } from 'recoil'
// import { langState } from 'src/stores/langContext'
//
// export const useLocale = () => {
//   const pathname = usePathname()
//   const locale = getUrlLanguage(pathname)
//   const lang = useRecoilValue(langState)
//   const t = getLocaleFile(lang)
//
//   return { locale, t }
// }
