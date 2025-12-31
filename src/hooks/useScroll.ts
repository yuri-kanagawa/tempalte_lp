import { useCallback } from 'react'
import { Scroll } from '@lib/scrolls'
import { usePathname, useRouter } from 'next/navigation'
import { PathBuilder } from 'src/lib/routes'
import { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  language: string
}

export const useScroll = ({ language }: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const transitionRoot = useCallback(() => {
    if (PathBuilder.isRoot(pathname)) return
    const langObj = Locale.create(language).locale ?? Locale.default()
    router.push(new PathBuilder(langObj).root())
  }, [language, pathname, router])

  const onClickHero = useCallback(() => {
    transitionRoot()
    Scroll.scrollToApp()
  }, [transitionRoot])
  const onClickToHowToUse = useCallback(() => {
    transitionRoot()
    Scroll.scrollToHowToUse()
  }, [transitionRoot])

  const onClickDownload = useCallback(() => {
    transitionRoot()
    Scroll.scrollToLink()
  }, [transitionRoot])

  const onClickContact = useCallback(() => {
    transitionRoot()
    Scroll.scrollToContact()
  }, [transitionRoot])

  return {
    onClickHero,
    onClickToHowToUse,
    onClickDownload,
    onClickContact
  }
}
