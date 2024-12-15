import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC, useCallback } from 'react'
import { Header } from 'src/ui/feature/Header'
import { Footer } from 'src/ui/feature/Footer'
import { useScroll } from 'src/hooks/useScroll'
import { Contact } from 'src/ui/feature/Contact'
import { getLocaleFile } from 'src/utils/language'
import { LanguageKey } from 'src/constants/language'

type Props = {
  lang: LanguageKey
}

export const IndexPage: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  const getIsFirst = (value: number) => value === 0
  const getIsLast = (value: number) => value === t.privacyPolicyArray.length - 1

  return (
    <>
      <Header lang={lang} currentPath={'/privacy-policy'} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>
          {t.word.privacyPolicy}
        </Typography>
        {t.privacyPolicyArray.map((e, index: number) => {
          return (
            <StyledAccordion
              key={index}
              title={e.question}
              explain={e.answer}
              isFirst={getIsFirst(index)}
              isLast={getIsLast(index)}
            />
          )
        })}
      </Stack>
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
