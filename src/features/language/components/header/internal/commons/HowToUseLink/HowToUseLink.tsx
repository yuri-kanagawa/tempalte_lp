import type { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'

type Props = {
  language: Language
  currentPath: string
}
export const HowToUseLink: FC<Props> = ({ language, currentPath }) => {
  const t = language?.locale ?? en

  const isRootPage = currentPath === '/'
  return (
    <LinkText
      currentPath={currentPath}
      pathname={'/'}
      query={{ scroll: Scroll.HOW_TO_USE }}
      onClick={Scroll.scrollToHowToUse}
    >
      {t.words.howToUse}{' '}
    </LinkText>
  )
}
