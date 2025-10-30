import { useCallback, useRef } from 'react'
import { Scroll } from '@lib/scrolls'
import { usePathname, useRouter } from 'next/navigation'
import { getIsRoot } from 'src/utils/url'
import { PathBuilder } from 'src/lib/routes'
import { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: string
}

export const useScroll = ({ language }: Props) => {
  const heroUseRef = useRef<HTMLDivElement | null>(null)
  const howToUseUseRef = useRef<HTMLDivElement | null>(null)
  const downloadUseRef = useRef<HTMLDivElement | null>(null)
  const contactUseRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const transitionRoot = useCallback(() => {
    if (getIsRoot(pathname)) return
    const langObj = Language.create(language).language ?? Language.default()
    router.push(new PathBuilder(langObj).root())
  }, [language, pathname, router])

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
