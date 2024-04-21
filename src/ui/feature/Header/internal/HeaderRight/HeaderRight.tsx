import { scroll, ScrollKey } from 'src/constants/scroll'
import { LanguageSelect } from 'src/ui/feature/Header/internal/LanguageSelect'
import React from 'react'
import { Typography } from '@mui/material'
import { useLocale } from 'src/hooks/useLocal'
import { TextBlackStyle } from 'src/styles/textStyle'
import { useSetRecoilState } from 'recoil'
import { scrollState } from 'src/stores/scrollContext'

type Props = {
  onClickContact: () => void
}

export const HeaderRight: React.FC<Props> = (props: Props) => {
  const { onClickContact } = props
  const { t } = useLocale()

  const setScrollTarget = useSetRecoilState(scrollState)

  const onClickHowToUse = () => {
    setScrollTarget(scroll.howToUse as ScrollKey)
  }
  const onClickDownload = () => {
    setScrollTarget(scroll.download as ScrollKey)
  }

  return (
    <>
      <Typography
        sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}
        onClick={onClickHowToUse}>
        {t.howToUse}
      </Typography>
      <Typography
        sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}
        onClick={onClickDownload}>
        {t.download}
      </Typography>
      <Typography
        sx={{ ...TextBlackStyle, mr: 2, textAlign: 'center' }}
        onClick={onClickContact}>
        {t.contact}
      </Typography>
      <LanguageSelect />
    </>
  )
}
