import { Stack, Typography } from '@mui/material'
// import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC } from 'react'
import { Footer } from 'src/features/language/components/footer'
import type { Language } from 'src/domains/valueObjects/language'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { Header } from 'src/features/language/components/header'

type Props = {
  language: Language
}

export const IndexPage: FC<Props> = ({ language }) => {
  const t = language.locale
  const getIsLast = (value: number) => value === t.messages.faq.length - 1

  const getIsFirst = (value: number) => value === 0
  return (
    <>
      <Header language={language} currentPath={'/faq'} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.words.faq}</Typography>
        {t.messages.faq.map((e: { q: string; a: string }, index: number) => {
          return (
            <StyledAccordion
              key={index}
              title={e.q}
              explain={e.a}
              isFirst={getIsFirst(index)}
              isLast={getIsLast(index)}
            />
          )
        })}
      </Stack>
      <Footer language={language} />
    </>
  )
}
