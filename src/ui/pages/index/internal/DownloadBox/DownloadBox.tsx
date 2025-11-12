'use client'
import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import { Scroll } from '@lib/scrolls'
import { APP_STORE_URL, GOOGLE_STORE_URL } from 'src/constants/urls'
import type { Language } from 'src/domains/valueObjects/language'
import { ContainerBox } from 'src/ui/fragments'

type Props = {
  language: Language
}

export const DownloadBox: React.FC<Props> = ({ language }) => {
  // const { isLessDesktop, isDesktopSize } = useMediaQuerySize()
  // const buttonWidth = useMemo(() => {
  //   if (isLessDesktop) return 150
  //   if (isDesktopSize) return 300
  // }, [isDesktopSize, isLessDesktop])

  const locale = language.locale
  const onClickAppStore = () => open(APP_STORE_URL, '_blank')
  const onClickGoogleStore = () => open(GOOGLE_STORE_URL, '_blank')
  return (
    <ContainerBox id={Scroll.LINK} background="black" label={locale.words.link}>
      <Stack spacing={4}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px, 3vw, 40px)',
            flexWrap: 'wrap'
          }}
        >
          {[
            { src: '/images/app-store.svg', alt: 'appStore', onClick: onClickAppStore },
            { src: '/images/google-store.svg', alt: 'GoogleStore', onClick: onClickGoogleStore }
          ].map(({ src, alt, onClick }) => (
            <Box
              key={alt}
              sx={{
                flex: '0 1 clamp(150px, 20vw, 300px)',
                aspectRatio: '1 / 1',
                position: 'relative'
              }}
            >
              <Image src={src} alt={alt} fill onClick={onClick} />
            </Box>
          ))}
        </Box>
      </Stack>
    </ContainerBox>
  )
}
