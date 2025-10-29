import React from 'react'

import type { Language } from 'src/domains/valueObjects/language'

import { DesktopHeader, MobileHeader } from './internal'

type Props = {
  language: Language
  currentPath: string
}

export const Header: React.FC<Props> = ({ language, currentPath }) => {
  return (
    <>
      <DesktopHeader language={language} currentPath={currentPath} />
      <MobileHeader language={language} currentPath={currentPath} />
    </>
  )
}
