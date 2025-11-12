import { ContactLink, DownLoadLink, HowToUseLink, LanguageSelect } from '../../commons'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
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
