import type { Locale } from 'src/domains/valueObjects/locale'
import { LinkText } from '../LinkText'
import { FC } from 'react'
import { Scroll } from '@lib/scrolls'
import { enUS } from 'src/locales/en-US'

type Props = {
  locale: Locale
}
export const DownLoadLink: FC<Props> = ({ locale }) => {
  const t = locale?.translation ?? enUS
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.LINK }} onClick={Scroll.scrollToLink}>
      {t.words.link}
    </LinkText>
  )
}
