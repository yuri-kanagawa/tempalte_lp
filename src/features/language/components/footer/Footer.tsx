import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { styles } from 'src/config/styles'
import { NextLink } from 'src/ui/cores/NextLink/NextLink'
import { PathBuilder } from 'src/lib/routes'
import { Locale } from 'src/domains/valueObjects/locale'
import { enUS } from 'src/locales/en-US'

type Props = {
  language: Locale
}
export const Footer: React.FC<Props> = ({ language }) => {
  const locale = language?.translation ?? enUS

  const builder = new PathBuilder(language)
  const privacyPolicyLink = builder.privacyPolicy()
  const ledenmLink = language.isEnglish
    ? 'https://ledenm.com/'
    : `https://ledenm.com/${language.value}`
  const termLink = builder.terms()
  const faqLink = builder.faq()
  return (
    <Box
      py={2}
      sx={{
        background: 'black',
        color: 'white'
      }}
    >
      <Stack>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid item>
            <Typography>©&nbsp;&nbsp;</Typography>
          </Grid>
          <Grid item>
            <NextLink pathname={ledenmLink}>
              <Typography sx={styles.iconButton.white}>Lilium Eden</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <Typography>&nbsp;&nbsp;All Rights Reserved.</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2}
        >
          <Grid item>
            <NextLink pathname={privacyPolicyLink}>
              <Typography sx={styles.iconButton.white}>{locale.words.privacyPolicy}</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={termLink}>
              <Typography sx={styles.iconButton.white}>{locale.words.terms}</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={faqLink}>
              <Typography sx={styles.iconButton.white}>{locale.words.faq}</Typography>
            </NextLink>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
