import { Stack, Typography } from '@mui/material'
// import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC } from 'react'
import { Footer } from 'src/features/language/components/footer'
import type { Language } from 'src/domains/valueObjects/language'
import { getLocaleFile } from 'src/utils/language'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { Header } from 'src/features/language/components/header'

type Props = {
  language: Language
}

export const IndexPage: FC<Props> = ({ language }) => {
  const t = getLocaleFile(language.value)
  const getIsLast = (value: number) => value === t.faqArray.length - 1

  // const { onClickHero, contactUseRef, onClickContact } = useScroll()
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
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>
          {t.words.faq}
        </Typography>
        {t.faqArray.map((e, index) => {
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
      {/*<div ref={contactUseRef}>*/}
      {/*  <Contact />*/}
      {/*</div>*/}
      <Footer language={language} />
    </>
  )
}
