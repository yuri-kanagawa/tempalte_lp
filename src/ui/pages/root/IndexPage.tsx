'use client'
import { HeroBox } from 'src/ui/pages/root/internal/HeroBox/HeroBox'
import { MovieBox } from 'src/ui/pages/root/internal/MovieBox/MovieBox'
import { DownloadBox } from 'src/ui/pages/root/internal/DownloadBox'
import { Box } from '@mui/material'

export const IndexPage = () => {
  return (
    <Box pt={10}>
      <HeroBox />
      <MovieBox />
      <DownloadBox />
    </Box>
  )
}
