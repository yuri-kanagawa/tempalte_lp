import { Scroll } from '@lib/scrolls'
import { common } from 'src/locales/common'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'

type Props = {
  language: Language
  currentPath: string
}
export const AppLink: FC<Props> = ({ language, currentPath }) => {
  return (
    <LinkText
      currentPath={currentPath}
      pathname={'/'}
      query={{ scroll: Scroll.APP }}
      onClick={Scroll.scrollToApp}
    >
      {common.app}
    </LinkText>
  )
}
