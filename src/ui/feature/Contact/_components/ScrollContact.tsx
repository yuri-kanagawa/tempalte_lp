import { Grid, Typography } from '@mui/material'
import { NextLink } from 'src/ui/core/Link/NextLink'
import IconButton from '@mui/material/IconButton'
import { IconButtonBlackStyle } from 'src/styles/iconStyle'
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai'

import { BsTiktok } from 'react-icons/bs'
import { getIsChinese, getLocaleFile } from 'src/utils/language'
import { FaBilibili } from 'react-icons/fa6'
import { LanguageKey } from 'src/constants/language'
import { FC } from 'react'

type Props = {
  lang: LanguageKey
}
export const ScrollContact: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  return (
    <>
      <Typography sx={{ textAlign: 'center', fontSize: 40, color: 'black' }}>
        {t.word.contact}
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

        {getIsChinese(lang) && (
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
