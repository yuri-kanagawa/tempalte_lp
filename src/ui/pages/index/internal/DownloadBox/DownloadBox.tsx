'use client'

import { Fragment, type ReactNode } from 'react'
import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { Scroll } from '@lib/scrolls'
import { APP_STORE_URL, GOOGLE_STORE_URL, WEB_APP_URL } from 'src/locales/common'
import type { Locale } from 'src/domains/valueObjects/locale'
import { ContainerBox } from 'src/ui/fragments'
type Props = {
  language: Locale
}

export const DownloadBox: React.FC<Props> = ({ language }) => {
  const locale = language.translation
  const onClickWebApp = () => open(WEB_APP_URL, '_blank')

  const storeButtons: { key: string; node: ReactNode }[] = []

  if (APP_STORE_URL) {
    storeButtons.push({
      key: 'app-store',
      node: (
        <Box
          component="a"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: { xs: '100%', sm: 208, md: 224, lg: 240 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: 4,
            overflow: 'hidden',
            textDecoration: 'none',
            border: 'none',
            outline: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-2px)' },
            '&:focus-visible': { outline: 'none' }
          }}
        >
          <Box
            component="img"
            src="/images/app-store.svg"
            alt="App Store"
            sx={{ width: '100%', height: 'auto', maxWidth: 240 }}
          />
        </Box>
      )
    })
  }

  if (GOOGLE_STORE_URL) {
    storeButtons.push({
      key: 'google-play',
      node: (
        <Box
          component="a"
          href={GOOGLE_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: { xs: '100%', sm: 208, md: 224, lg: 240 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: 4,
            overflow: 'hidden',
            textDecoration: 'none',
            border: 'none',
            outline: 'none',
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-2px)' },
            '&:focus-visible': { outline: 'none' }
          }}
        >
          <Box
            component="img"
            src="/images/google-store.svg"
            alt="Google Play"
            sx={{ width: '100%', height: 'auto', maxWidth: 240 }}
          />
        </Box>
      )
    })
  }

  if (WEB_APP_URL) {
    storeButtons.push({
      key: 'web-app',
      node: (
        <ButtonBase
          onClick={onClickWebApp}
          aria-label={locale.words.webApp}
          sx={{
            width: { xs: 250, sm: 208, md: 224, lg: 240 },
            minHeight: 71,
            borderRadius: 4,
            border: '1.8px solid rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.04)',
            px: { xs: 3, sm: 4 },
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-2px)' }
          }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 2.5 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: '100%' }}
          >
            <Box
              sx={{
                width: { xs: 42, sm: 48 },
                height: { xs: 42, sm: 48 },
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <LanguageIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: 18, sm: 20 },
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              {locale.words.webApp}
            </Typography>
          </Stack>
        </ButtonBase>
      )
    })
  }

  const shouldWrap = storeButtons.length > 2
  const showDivider = storeButtons.length > 1 && !shouldWrap

  return (
    <ContainerBox id={Scroll.LINK} background="black" label={locale.words.link}>
      <Stack spacing={{ xs: 3, md: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: { xs: 'wrap', sm: shouldWrap ? 'wrap' : 'nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2.5, sm: 'clamp(16px, 3vw, 32px)' },
            width: '100%'
          }}
        >
          {storeButtons.map((button, index) => (
            <Fragment key={button.key}>
              {index > 0 && showDivider && (
                <Box
                  sx={{
                    width: { xs: '100%', sm: 1 },
                    height: { xs: 1, sm: 40 },
                    backgroundColor: 'rgba(255,255,255,0.2)'
                  }}
                />
              )}
              {button.node}
            </Fragment>
          ))}
        </Box>
      </Stack>
    </ContainerBox>
  )
}
