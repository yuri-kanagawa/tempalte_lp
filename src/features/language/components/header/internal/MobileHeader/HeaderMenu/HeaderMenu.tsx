import { ContactLink, DownLoadLink, HowToUseLink, LanguageSelect } from '../../commons'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  language: Locale
}
export const HeaderMenu: FC<Props> = ({ language }) => {
  return (
    <>
      <DownLoadLink language={language} />
      <HowToUseLink language={language} />
      <ContactLink language={language} />
      <LanguageSelect language={language} />
    </>
  )
}
