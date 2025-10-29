import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import React, { FC, useCallback } from 'react'
import { Header } from 'src/features/language/components/header'
import { useScroll } from 'src/hooks/useScroll'
import { Contact } from 'src/features/language/components/contact'
import { Footer } from 'src/features/language/components/footer'
import { builders } from 'prettier/doc'

import type { Language } from 'src/domains/valueObjects/language'
import { getLocaleFile } from 'src/utils/language'

type Props = {
  language: Language
}
export const IndexPage: FC<Props> = ({ language }) => {
  const t = getLocaleFile(language.value)
  const getIsLast = (value: number) => value === t.termArray.length - 1
  const getIsFirst = (value: number) => value === 0
  return (
    <>
      <Header language={language} currentPath={'/terms'} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>
          {t.words.terms}
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
      <Contact language={language} />
      <Footer language={language} />
    </>
  )
}
