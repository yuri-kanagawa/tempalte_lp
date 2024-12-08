import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { IconButtonWhiteStyle } from 'src/styles/iconStyle'
import { getIsEnglish, getLocaleFile } from 'src/utils/language'
import { NextLink } from 'src/ui/core/Link/NextLink'
import { LanguageKey } from 'src/constants/language'
import { route } from 'src/constants/route'

type Props = {
  lang: LanguageKey
}
export const Footer: React.FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)

  const privacyPolicyLink = route.privacyPolicy.index(lang)
  const ledenmLink = getIsEnglish(lang)
    ? 'https://ledenm.com/'
    : `https://ledenm.com/${lang}`
  const termLink = route.terms.index(lang)
  const faqLink = route.faq.index(lang)
  return (
    <Box
      py={2}
      sx={{
        background: 'black',
        color: 'white'
      }}>
      <Stack>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
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
          gap={2}>
          <Grid item>
            <NextLink pathname={privacyPolicyLink}>
              <Typography
                sx={IconButtonWhiteStyle}
                // onClick={onClickPrivacyPolicy}
              >
                {t.word.privacyPolicy}
              </Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={termLink}>
              <Typography sx={IconButtonWhiteStyle}>{t.word.terms}</Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink pathname={faqLink}>
              <Typography sx={IconButtonWhiteStyle}>{t.word.faq}</Typography>
            </NextLink>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
