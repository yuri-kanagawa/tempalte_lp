import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const DownLoadLink: FC<Props> = ({ language }) => {
  const t = language?.locale ?? en
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.LINK }} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </LinkText>
  )
}
