import { ContactLink, DownLoadLink, HowToUseLink, LanguageSelect } from '../../commons'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  locale: Locale
}
export const HeaderMenu: FC<Props> = ({ locale }) => {
  return (
    <>
      <DownLoadLink locale={locale} />
      <HowToUseLink locale={locale} />
      <ContactLink locale={locale} />
      <LanguageSelect locale={locale} />
    </>
  )
}
