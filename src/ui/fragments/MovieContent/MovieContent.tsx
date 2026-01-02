'use client'

import { Stack } from '@mui/material'
import { styles } from 'src/config/styles'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { useMemo } from 'react'

type Props = {
  videoUrl: string
}

export const MovieContent: React.FC<Props> = ({ videoUrl }) => {
  const { isMobileSize, isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const maxWidth = useMemo(() => {
    if (isMobileSize) return 400
    if (isLessDesktop) return 600
    if (isDesktopSize) return 900
    return 900
  }, [isDesktopSize, isLessDesktop, isMobileSize])

  return (
    <Stack spacing={4}>
      <iframe
        src={videoUrl}
        height={styles.video.getMovieHeight(maxWidth)}
        width={maxWidth}
      ></iframe>
    </Stack>
  )
}

