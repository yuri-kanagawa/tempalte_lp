import { Box, Grid, Typography } from '@mui/material'
import { scroll } from 'src/constants/scroll'
import { LanguageKey } from 'src/constants/language'
import { FC } from 'react'
import { ScrollContact } from 'src/ui/feature/Contact/_components/ScrollContact'
import { Scroll } from 'src/ui/feature/Contact/_components/Scroll'

type Props = {
  lang: LanguageKey
}

export const Contact: FC<Props> = ({ lang }) => {
  return (
    <Box sx={{ background: 'white', py: 10 }}>
      <Scroll />
      <ScrollContact lang={lang} />
    </Box>
  )
}
