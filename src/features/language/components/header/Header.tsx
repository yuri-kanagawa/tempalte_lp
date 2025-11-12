import React from 'react'

import type { Language } from 'src/domains/valueObjects/language'

import { DesktopHeader, MobileHeader } from './internal'

type Props = {
  language: Language
}

export const Header: React.FC<Props> = ({ language }) => {
  return (
    <>
      <DesktopHeader language={language} />
      <MobileHeader language={language} />
    </>
  )
}
