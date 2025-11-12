'use client'
import React, { FC } from 'react'

import { Footer, Contact, Header } from 'src/features/language'
import type { Language } from 'src/domains/valueObjects/language'
import { Content } from 'src/ui/pages/index/internal/Content'
import { DownloadBox } from 'src/ui/pages/index/internal/DownloadBox'
import { HeroBox } from 'src/ui/pages/index/internal/HeroBox/HeroBox'

type Props = {
  language: Language
}
export const IndexPage: FC<Props> = ({ language }) => {
  return (
    <>
      <Header language={language} />
      <HeroBox language={language} />
      <Content language={language} />

      <DownloadBox language={language} />

      <Contact language={language} />

      <Footer language={language} />
    </>
  )
}
