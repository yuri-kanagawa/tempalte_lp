'use client'

import { Fragment } from 'react'
import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

type StoreButton =
  | { type: 'app-store'; url: string }
  | { type: 'google-play'; url: string }
  | { type: 'web-app'; url: string; label: string }

type Props = {
  buttons: StoreButton[]
}

export const StoreButtons: React.FC<Props> = ({ buttons }) => {
  const shouldWrap = buttons.length > 2
  const showDivider = buttons.length > 1 && !shouldWrap

  return (
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
      {buttons.map((button, index) => (
        <Fragment key={button.type}>
          {index > 0 && showDivider && (
            <Box
              sx={{
                width: { xs: '100%', sm: 1 },
                height: { xs: 1, sm: 40 },
                backgroundColor: 'rgba(255,255,255,0.2)'
              }}
            />
          )}
          {button.type === 'app-store' && (
            <Box
              component="a"
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '100%', sm: 208, md: 224, lg: 240 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
          )}
          {button.type === 'google-play' && (
            <Box
              component="a"
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '100%', sm: 208, md: 224, lg: 240 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
          )}
          {button.type === 'web-app' && (
            <ButtonBase
              onClick={() => open(button.url, '_blank')}
              aria-label={button.label}
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
                  {button.label}
                </Typography>
              </Stack>
            </ButtonBase>
          )}
        </Fragment>
      ))}
    </Box>
  )
}

