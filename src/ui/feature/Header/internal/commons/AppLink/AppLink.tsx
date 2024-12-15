import { onClickApp, onClickHowToUse, scroll } from 'src/constants/scroll'
import { common } from 'src/locales/common'
import React, { FC } from 'react'
import { LanguageKey } from 'src/constants/language'
import { LinkText } from 'src/ui/feature/Header/internal/commons/LinkText'

type Props = {
  lang: LanguageKey
  currentPath: string
}
export const AppLink: FC<Props> = ({ lang, currentPath }) => {
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
