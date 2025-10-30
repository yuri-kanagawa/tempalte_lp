import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC, useCallback } from 'react'
import { Header } from 'src/features/language/components/header'
import { Footer } from 'src/features/language/components/footer'
import { useScroll } from 'src/hooks/useScroll'
import { Contact } from 'src/features/language/components/contact'
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
}

export const IndexPage: FC<Props> = ({ language }) => {
  const t = language.locale
  const getIsFirst = (value: number) => value === 0
  const getIsLast = (value: number) => value === t.messages.privacyPolicy.length - 1

  return (
    <>
      <Header language={language} currentPath={'/privacy'} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.words.privacyPolicy}</Typography>
        {t.messages.privacyPolicy.map((e: { title: string; body: string }, index: number) => {
          return (
            <StyledAccordion
              key={index}
              title={e.title}
              explain={e.body}
              isFirst={getIsFirst(index)}
              isLast={getIsLast(index)}
            />
          )
        })}
      </Stack>
      <Contact language={language} />
      <Footer language={language} />
    </>
  )
}
