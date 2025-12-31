import type { Locale } from 'src/domains/valueObjects/locale'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { enUS } from 'src/locales/en-US'

type Props = {
  language: Locale
}
export const ContactLink: FC<Props> = ({ language }) => {
  const t = language?.locale ?? enUS
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.CONTACT }} onClick={Scroll.scrollToContact}>
      {t.words.contact}
    </LinkText>
  )
}
