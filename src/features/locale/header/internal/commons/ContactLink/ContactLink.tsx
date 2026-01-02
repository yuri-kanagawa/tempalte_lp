import type { Locale } from 'src/domains/valueObjects/locale'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { enUS } from 'src/locales/en-US'

type Props = {
  locale: Locale
}
export const ContactLink: FC<Props> = ({ locale }) => {
  const t = locale?.translation ?? enUS
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.CONTACT }} onClick={Scroll.scrollToContact}>
      {t.words.contact}
    </LinkText>
  )
}
