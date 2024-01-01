import { Scroll } from 'src/ui/feature/Scroll'
import { scroll } from 'src/constants/scroll'
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
          <Scroll to={scroll.howToUse} smooth={true} text={t.howToUse} />
        </Typography>
      )}

      {getIsRoot(pathname) && (
        <Typography sx={{ ...TextBlackStyle, mr: 2 }}>
          <Scroll to={scroll.download} smooth={true} text={t.download} />
        </Typography>
      )}

      <Typography sx={{ ...TextBlackStyle, mr: 2 }}>
        <Scroll to={scroll.contact} smooth={true} text={t.contact} />
      </Typography>

      <LanguageSelect />
    </>
  )
}
