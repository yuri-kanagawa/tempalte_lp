import { Scroll } from 'src/ui/feature/Scroll'
import { scrollHome } from 'src/constants/scroll'
import { LanguageSelect } from 'src/ui/feature/Header/internal/LanguageSelect'
import React from 'react'
import { Typography } from '@mui/material'
import { useLocale } from 'src/hooks/useLocal'
import { TextBlackStyle } from 'src/styles/textStyle'
import { getIsRoot } from 'src/utils/url'
import { usePathname } from 'next/navigation'

export const HeaderRight: React.FC = () => {
  const { t } = useLocale()
  const pathname = usePathname()
  return (
    <>
      {getIsRoot(pathname) && (
        <Typography sx={{ ...TextBlackStyle, mr: 2 }}>
          <Scroll to={scrollHome.app} smooth={true} text={t.howToUse} />
        </Typography>
      )}

      {getIsRoot(pathname) && (
        <Typography sx={{ ...TextBlackStyle, mr: 2 }}>
          <Scroll to={scrollHome.app} smooth={true} text={t.download} />
        </Typography>
      )}
      {getIsRoot(pathname) && (
        <Typography sx={{ ...TextBlackStyle, mr: 2 }}>
          <Scroll to={scrollHome.app} smooth={true} text={t.contact} />
        </Typography>
      )}

      <LanguageSelect />
    </>
  )
}
