import { onClickApp, onClickHowToUse, scroll } from 'src/constants/scroll'
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
      query={{ scroll: scroll.howToUse }}
      onClick={onClickHowToUse}>
      {common.app}
    </LinkText>
  )
}
