import { Box, Grid, Typography } from '@mui/material'
import { scroll } from 'src/constants/scroll'
import type { Language } from 'src/domains/valueObjects/language'
import { FC } from 'react'
import { ScrollContact } from './_components/ScrollContact'
import { Scroll } from './_components/Scroll'

type Props = {
  language: Language
}

export const Contact: FC<Props> = ({ language }) => {
  return (
    <Box sx={{ background: 'white', py: 10 }}>
      <Scroll />
      <ScrollContact language={language} />
    </Box>
  )
}
