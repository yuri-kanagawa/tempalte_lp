import { Box, Stack, Typography } from '@mui/material'
import { getMovieHeight } from 'src/styles/videoStyle'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { useMemo } from 'react'
import { titleFontSize } from 'src/styles/fontStyle'
import { useLocale } from 'src/hooks/useLocal'
import { scroll } from 'src/constants/scroll'

export const MovieBox = () => {
  const { isMobileSize, isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const maxWidth = useMemo(() => {
    if (isMobileSize) return 400
    if (isLessDesktop) return 600
    if (isDesktopSize) return 900
    return 900
  }, [isDesktopSize, isLessDesktop, isMobileSize])
  const { t } = useLocale()

  return (
    <Box
      id={scroll.howToUse}
      sx={{
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10
      }}>
      <Stack spacing={4}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', ...titleFontSize }}>
          {t.howToUse}
        </Typography>
        <iframe
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          height={getMovieHeight(maxWidth)}
          width={maxWidth}></iframe>
      </Stack>
    </Box>
  )
}
