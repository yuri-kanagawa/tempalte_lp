import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'
import { getLocaleFile } from 'src/utils/language'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'

type Props = {
  language: Language
  currentPath: string
}
export const HowToUseLink: FC<Props> = ({ language, currentPath }) => {
  const t = language.locale

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
