import { useCallback, useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { scrollState } from 'src/stores/scrollContext'
import { scroll } from 'src/constants/scroll'
import { usePathname, useRouter } from 'next/navigation'
import { getIsRoot } from 'src/utils/url'
import { route } from 'src/constants/route'
import { langState } from 'src/stores/langContext'

export const useScroll = () => {
  const heroUseRef = useRef<HTMLDivElement | null>(null)
  const howToUseUseRef = useRef<HTMLDivElement | null>(null)
  const downloadUseRef = useRef<HTMLDivElement | null>(null)
  const contactUseRef = useRef<HTMLDivElement | null>(null)
  const lang = useRecoilValue(langState)
  const pathname = usePathname()
  const router = useRouter()

  const transitionRoot = useCallback(() => {
    if (getIsRoot(pathname)) return
    router.push(route.root(lang))
  }, [lang, pathname, router])

  const onClickHero = useCallback(() => {
    transitionRoot()
    if (!heroUseRef) return
    heroUseRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [transitionRoot])
  const onClickToHowToUse = useCallback(() => {
    transitionRoot()
    if (!howToUseUseRef) return
    howToUseUseRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [transitionRoot])

  const onClickDownload = useCallback(() => {
    transitionRoot()
    if (!howToUseUseRef) return
    downloadUseRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [transitionRoot])

  const onClickContact = useCallback(() => {
    transitionRoot()
    if (!howToUseUseRef) return
    contactUseRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [transitionRoot])

  const [scrollPosition, setScrollPosition] = useRecoilState(scrollState)

  useEffect(() => {
    switch (scrollPosition) {
      case scroll.app:
        setScrollPosition(undefined)
        return onClickHero()

      case scroll.howToUse:
        setScrollPosition(undefined)
        return onClickToHowToUse()

      case scroll.contact:
        setScrollPosition(undefined)
        return onClickContact()

      case scroll.download:
        setScrollPosition(undefined)
        return onClickDownload()
      case undefined:
        return
    }
  }, [
    onClickContact,
    onClickDownload,
    onClickHero,
    onClickToHowToUse,
    scrollPosition,
    setScrollPosition
  ])

  return {
    heroUseRef,
    howToUseUseRef,
    downloadUseRef,
    contactUseRef,
    onClickHero,
    onClickToHowToUse,
    onClickDownload,
    onClickContact
  }
}
