import React from 'react'

import type { Locale } from 'src/domains/valueObjects/locale'

import { DesktopHeader, MobileHeader } from './internal'

type Props = {
  language: Locale
}

export const Header: React.FC<Props> = ({ language }) => {
  return (
    <>
      <DesktopHeader language={language} />
      <MobileHeader language={language} />
    </>
  )
}
