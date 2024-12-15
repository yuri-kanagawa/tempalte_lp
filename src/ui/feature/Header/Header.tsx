import React from 'react'

import { LanguageKey } from 'src/constants/language'

import { DesktopHeader, MobileHeader } from './internal'

type Props = {
  lang: LanguageKey
  currentPath: string
}

export const Header: React.FC<Props> = ({ lang, currentPath }) => {
  return (
    <>
      <DesktopHeader lang={lang} currentPath={currentPath} />
      <MobileHeader lang={lang} currentPath={currentPath} />
    </>
  )
}
