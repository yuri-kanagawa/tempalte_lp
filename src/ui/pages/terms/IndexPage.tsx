import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import React, { FC, useCallback } from 'react'
import { Header } from 'src/ui/feature/Header'
import { useScroll } from 'src/hooks/useScroll'
import { Contact } from 'src/ui/feature/Contact'
import { Footer } from 'src/ui/feature/Footer'
import { builders } from 'prettier/doc'

import { LanguageKey } from 'src/constants/language'
import { getLocaleFile } from 'src/utils/language'

type Props = {
  lang: LanguageKey
}
export const IndexPage: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  const getIsLast = (value: number) => value === t.termArray.length - 1
  const getIsFirst = (value: number) => value === 0
  return (
    <>
      <Header lang={lang} currentPath={'/faq'} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>
          {t.word.terms}
        </Typography>
        {t.termArray.map((e, index) => {
          return (
            <StyledAccordion
              key={index}
              title={e.heading}
              explain={e.content}
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
