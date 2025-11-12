'use client'
import { Stack } from '@mui/material'
import { getMovieHeight } from 'src/styles/videoStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { useMemo } from 'react'
import { Scroll as ScrollConstants } from '@lib/scrolls'
import type { Language } from 'src/domains/valueObjects/language'
import { en } from 'src/locales/en'
import { ContainerBox } from 'src/ui/fragments'

type Props = {
  language: Language
}

export const MovieBox: React.FC<Props> = ({ language }) => {
  const { isMobileSize, isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const maxWidth = useMemo(() => {
    if (isMobileSize) return 400
    if (isLessDesktop) return 600
    if (isDesktopSize) return 900
    return 900
  }, [isDesktopSize, isLessDesktop, isMobileSize])
  const locale = language?.locale ?? en
  return (
    <ContainerBox
      id={ScrollConstants.HOW_TO_USE}
      background="white"
      label={locale.words.howToUse}
      labelColor="black"
    >
      <Stack spacing={4}>
        <iframe
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          height={getMovieHeight(maxWidth)}
          width={maxWidth}
        ></iframe>
      </Stack>
    </ContainerBox>
  )
}
