'use client'
import React, { FC } from 'react'

import { Footer, Contact, Header } from 'src/features/locale'
import type { Locale } from 'src/domains/valueObjects/locale'
import { Content } from 'src/ui/pages/index/internal/Content'
import { DownloadBox } from 'src/ui/pages/index/internal/DownloadBox'
import { HeroBox } from 'src/ui/pages/index/internal/HeroBox/HeroBox'

type Props = {
  locale: Locale
}
export const HomePage: FC<Props> = ({ locale }) => {
  return (
    <>
      <Header locale={locale} />
      <HeroBox locale={locale} />
      <Content locale={locale} />

      <DownloadBox locale={locale} />

      <Contact locale={locale} />

      <Footer locale={locale} />
    </>
  )
}
