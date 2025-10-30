import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { IconButtonWhiteStyle } from 'src/styles/iconStyle'
import { NextLink } from 'src/ui/core/Link/NextLink'
import { PathBuilder } from 'src/lib/routes'
import { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
}
export const Footer: React.FC<Props> = ({ language }) => {
  const locale = language.locale

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
              <Typography sx={IconButtonWhiteStyle}>Lilium Eden</Typography>
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
              <Typography sx={IconButtonWhiteStyle}>{locale.words.privacyPolicy}</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={termLink}>
              <Typography sx={IconButtonWhiteStyle}>{locale.words.terms}</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={faqLink}>
              <Typography sx={IconButtonWhiteStyle}>{locale.words.faq}</Typography>
            </NextLink>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
