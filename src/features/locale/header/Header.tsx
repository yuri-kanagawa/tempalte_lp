import React from 'react'

import type { Locale } from 'src/domains/valueObjects/locale'

import { DesktopHeader, MobileHeader } from './internal'

type Props = {
  locale: Locale
}

export const Header: React.FC<Props> = ({ locale }) => {
  return (
    <>
      <DesktopHeader locale={locale} />
      <MobileHeader locale={locale} />
    </>
  )
}
