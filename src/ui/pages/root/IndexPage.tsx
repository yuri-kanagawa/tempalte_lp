'use client'
import { HeroBox } from 'src/ui/pages/root/internal/HeroBox/HeroBox'
import { MovieBox } from 'src/ui/pages/root/internal/MovieBox/MovieBox'
import { DownloadBox } from 'src/ui/pages/root/internal/DownloadBox'
import { Box } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import { Header } from 'src/ui/feature/Header'
import { Contact } from 'src/ui/feature/Contact'
import { Footer } from 'src/ui/feature/Footer'
import { useScroll } from 'src/hooks/useScroll'

export const IndexPage = () => {
  const {
    heroUseRef,
    howToUseUseRef,
    downloadUseRef,
    contactUseRef,
    onClickHero,
    onClickToHowToUse,
    onClickDownload,
    onClickContact
  } = useScroll()
  return (
    <>
      <Header onClickHero={onClickHero} onClickContact={onClickContact} />
      <div ref={heroUseRef}>
        <HeroBox
          onClickToHowToUse={onClickToHowToUse}
          onClickDownload={onClickDownload}
        />
      </div>
      <div ref={howToUseUseRef}>
        <MovieBox />
      </div>
      <div ref={downloadUseRef}>
        <DownloadBox />
      </div>
      <div ref={contactUseRef}>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
