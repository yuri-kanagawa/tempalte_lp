import { Stack, Typography } from '@mui/material'
// import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'

import React, { FC } from 'react'
import { Footer } from 'src/ui/feature/Footer'
import { LanguageKey } from 'src/constants/language'
import { getLocaleFile } from 'src/utils/language'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { Header } from 'src/ui/feature/Header'

type Props = {
  lang: LanguageKey
}

export const IndexPage: FC<Props> = ({ lang }) => {
  const t = getLocaleFile(lang)
  const getIsLast = (value: number) => value === t.faqArray.length - 1

  // const { onClickHero, contactUseRef, onClickContact } = useScroll()
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
          {t.word.faq}
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
      <Footer lang={lang} />
    </>
  )
}
