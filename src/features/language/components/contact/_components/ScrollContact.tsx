import { Grid, Typography } from '@mui/material'
import { NextLink } from 'src/ui/core/Link/NextLink'
import IconButton from '@mui/material/IconButton'
import { IconButtonBlackStyle } from 'src/styles/iconStyle'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

import { BsTiktok } from 'react-icons/bs'
import { FaBilibili } from 'react-icons/fa6'
import type { Language } from 'src/domains/valueObjects/language'
import { FC } from 'react'
import { en } from 'src/locales/en'

type Props = {
  language: Language
}
export const ScrollContact: FC<Props> = ({ language }) => {
  const t = language?.locale ?? en
  const isChinese = language.value === 'zh'
  return (
    <>
      <Typography sx={{ textAlign: 'center', fontSize: 40, color: 'black' }}>
        {t.words.contact}
      </Typography>
      <Grid container sx={{ justifyContent: 'center', pb: 4 }} gap={2}>
        <Grid item>
          <NextLink pathname={''}>
            <IconButton sx={IconButtonBlackStyle}>
              <AiOutlineTwitter />
            </IconButton>
          </NextLink>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <AiOutlineInstagram />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <AiFillYoutube />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <BsTiktok style={{ marginBottom: 10 }} />
          </IconButton>
        </Grid>

        {isChinese && (
          <Grid item>
            <IconButton sx={IconButtonBlackStyle}>
              <FaBilibili />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </>
  )
}
