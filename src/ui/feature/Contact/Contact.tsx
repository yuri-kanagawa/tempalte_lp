'use client'
import { Box, Grid, Typography } from '@mui/material'
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai'
import { FaBilibili } from 'react-icons/fa6'
import { BsTiktok } from 'react-icons/bs'
import { useLocale } from 'src/hooks/useLocal'

import IconButton from '@mui/material/IconButton'
import {
  BiliBiliIconSize,
  createIconSizeCalculator,
  DefaultIconSize,
  IconSizeMediaType,
  TikTokIconSize
} from 'src/ui/feature/Contact/utils'
import { IconButtonBlackStyle } from 'src/styles/iconStyle'
import { scrollHome } from 'src/constants/scroll'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { getIsChinese } from 'src/utils/language'

export const Contact = () => {
  const { locale, t } = useLocale()
  const { isTabletSize, isMobileSize, isLaptopSize } = useMediaQuerySize()

  const iconSizeMedia: IconSizeMediaType = {
    isTabletSize,
    isMobileSize,
    isLaptopSize
  }

  const getIconSize = createIconSizeCalculator(iconSizeMedia)

  return (
    <Box id={scrollHome.contact} sx={{ background: 'white', py: 10 }}>
      <Typography sx={{ textAlign: 'center', fontSize: 40, color: 'black' }}>
        {t.contact}
      </Typography>
      <Grid container sx={{ justifyContent: 'center', pb: 4 }} gap={2}>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <AiOutlineTwitter size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <AiOutlineInstagram size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <AiFillYoutube size={getIconSize(DefaultIconSize)} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={IconButtonBlackStyle}>
            <BsTiktok
              size={getIconSize(TikTokIconSize)}
              style={{ marginBottom: 10 }}
            />
          </IconButton>
        </Grid>

        {getIsChinese(locale) && (
          <Grid item>
            <IconButton sx={IconButtonBlackStyle}>
              <FaBilibili size={getIconSize(BiliBiliIconSize)} />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
