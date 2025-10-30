import { ContactLink, DownLoadLink, HowToUseLink, LanguageSelect } from '../../commons'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
  currentPath: string
}
export const HeaderMenu: FC<Props> = ({ language, currentPath }) => {
  return (
    <>
      <DownLoadLink language={language} currentPath={currentPath} />
      <HowToUseLink language={language} currentPath={currentPath} />
      <ContactLink language={language} currentPath={currentPath} />
      <LanguageSelect language={language} currentPath={currentPath} />
    </>
  )
}
