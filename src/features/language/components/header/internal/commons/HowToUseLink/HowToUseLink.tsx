import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'

type Props = {
  language: Language
}
export const HowToUseLink: FC<Props> = ({ language }) => {
  const t = language.locale
  return (
    <LinkText
      pathname={'/'}
      query={{ scroll: Scroll.HOW_TO_USE }}
      onClick={Scroll.scrollToHowToUse}
    >
      {t.words.howToUse}
    </LinkText>
  )
}
