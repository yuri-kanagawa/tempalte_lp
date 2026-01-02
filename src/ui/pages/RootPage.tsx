'use client'
import React, { FC } from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'

import { Footer, Header } from 'src/features/locale'
import type { Locale } from 'src/domains/valueObjects/locale'
import { Scroll } from '@lib/scrolls'
import { APP_STORE_URL, GOOGLE_STORE_URL, WEB_APP_URL } from 'src/locales/common'
import { StoreButtons, HeroContent, SocialLinks, MovieContent, AlternatingContainerBox, ContainerBox } from 'src/ui/fragments'
import { QueryScrollAnchor } from 'src/ui/cores'
import { styles } from 'src/config/styles'

type Props = {
  locale: Locale
}

export const RootPage: FC<Props> = ({ locale }) => {
  const localeTranslation = locale.translation

  const buttons = []
  if (APP_STORE_URL) {
    buttons.push({ type: 'app-store' as const, url: APP_STORE_URL })
  }
  if (GOOGLE_STORE_URL) {
    buttons.push({ type: 'google-play' as const, url: GOOGLE_STORE_URL })
  }
  if (WEB_APP_URL) {
    buttons.push({ type: 'web-app' as const, url: WEB_APP_URL, label: localeTranslation.words.webApp })
  }

  return (
    <>
      <Header locale={locale} />
      <AlternatingContainerBox startWith="black">
        <ContainerBox id={Scroll.APP} sx={{ py: 5 }}>
          <QueryScrollAnchor id={Scroll.APP} queryValue={Scroll.APP}>
            <HeroContent imageSrc="/images/lily.png" imageAlt="猫は最高に可愛い" imageWidth={300} imageHeight={553.6}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    color: 'white',
                    whiteSpace: 'pre-wrap',
                    ...styles.typography.titleFontSize
                  }}
                >
                  {localeTranslation.words.heroText}
                </Typography>
                <Button variant={'outlined'} sx={styles.button.white} onClick={Scroll.scrollToHowToUse}>
                  {localeTranslation.words.howToUse}
                </Button>
                <Button variant={'outlined'} sx={styles.button.white} onClick={Scroll.scrollToLink}>
                  {localeTranslation.words.link}
                </Button>
              </Stack>
            </HeroContent>
          </QueryScrollAnchor>
        </ContainerBox>
        <ContainerBox id={Scroll.HOW_TO_USE} label={localeTranslation.words.howToUse}>
          <MovieContent videoUrl="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" />
        </ContainerBox>
        <ContainerBox id={Scroll.LINK} label={localeTranslation.words.link}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <StoreButtons buttons={buttons} />
          </Stack>
        </ContainerBox>
        <ContainerBox id={Scroll.CONTACT} label={localeTranslation.words.contact}>
          <SocialLinks links={localeTranslation.links} />
        </ContainerBox>
      </AlternatingContainerBox>

      <Footer locale={locale} />
    </>
  )
}
