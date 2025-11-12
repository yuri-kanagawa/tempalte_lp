import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const ContactLink: FC<Props> = ({ language }) => {
  const t = language?.locale ?? en
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.CONTACT }} onClick={Scroll.scrollToContact}>
      {t.words.contact}
    </LinkText>
  )
}
