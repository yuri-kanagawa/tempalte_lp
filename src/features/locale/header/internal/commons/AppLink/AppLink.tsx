import { Scroll } from '@lib/scrolls'
import { common } from 'src/locales/common'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { LinkText } from '../LinkText'

type Props = {
  locale: Locale
}
export const AppLink: FC<Props> = ({ locale }) => {
  return (
    <LinkText pathname={'/'} query={{ scroll: Scroll.APP }} onClick={Scroll.scrollToApp}>
      {common.app}
    </LinkText>
  )
}
