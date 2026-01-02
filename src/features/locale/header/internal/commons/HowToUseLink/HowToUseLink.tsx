import type { Locale } from 'src/domains/valueObjects/locale'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'

type Props = {
  locale: Locale
}
export const HowToUseLink: FC<Props> = ({ locale }) => {
  const t = locale.translation
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
