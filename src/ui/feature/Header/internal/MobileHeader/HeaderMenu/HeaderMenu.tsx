import {
  ContactLink,
  DownLoadLink,
  HowToUseLink,
  LanguageSelect
} from 'src/ui/feature/Header/internal/commons'
import React, { FC } from 'react'
import { LanguageKey } from 'src/constants/language'

type Props = {
  lang: LanguageKey
  currentPath: string
}
export const HeaderMenu: FC<Props> = ({ lang, currentPath }) => {
  return (
    <>
      <DownLoadLink lang={lang} currentPath={currentPath} />
      <HowToUseLink lang={lang} currentPath={currentPath} />
      <ContactLink lang={lang} currentPath={currentPath} />
      <LanguageSelect lang={lang} currentPath={currentPath} />
    </>
  )
}
