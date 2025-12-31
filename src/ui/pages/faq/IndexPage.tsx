import { Stack, Typography } from '@mui/material'
// import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC } from 'react'
import { Footer } from 'src/features/language/components/footer'
import { Contact } from 'src/features/language/components/contact'
import type { Locale } from 'src/domains/valueObjects/locale'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { Header } from 'src/features/language/components/header'

type Props = {
  language: Locale
}

export const IndexPage: FC<Props> = ({ language }) => {
  const t = language.locale

  return (
    <>
      <Header language={language} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.words.faq}</Typography>
        {t.messages.faq.map((e, index: number) => {
          return (
            <StyledAccordion
              key={index}
              title={e.q}
              explain={e.a}
              isFirst={index === 0}
              isLast={index === t.messages.faq.length - 1}
            />
          )
        })}
      </Stack>
      <Contact language={language} />
      <Footer language={language} />
    </>
  )
}
