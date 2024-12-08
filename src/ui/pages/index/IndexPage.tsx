import React, { FC } from 'react'

import { Footer } from 'src/ui/feature/Footer'
import { LanguageKey } from 'src/constants/language'
import { Content } from 'src/ui/pages/index/internal/Content'
import { Contact } from 'src/ui/feature/Contact'
import { DownloadBox } from 'src/ui/pages/index/internal/DownloadBox'
import { Header } from 'src/ui/feature/Header'
import { HeroBox } from 'src/ui/pages/index/internal/HeroBox/HeroBox'

type Props = {
  lang: LanguageKey
}
export const IndexPage: FC<Props> = ({ lang }) => {
  return (
    <>
      <Header lang={lang} currentPath={'/'} />
      <HeroBox lang={lang} />
      <Content lang={lang} />

      <DownloadBox lang={lang} />

      <Contact lang={lang} />

      <Footer lang={lang} />
    </>
  )
}
