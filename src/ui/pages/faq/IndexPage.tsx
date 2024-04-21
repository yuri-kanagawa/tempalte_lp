import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { useLocale } from 'src/hooks/useLocal'
import React, { useCallback } from 'react'
import { useScroll } from 'src/hooks/useScroll'
import { Header } from 'src/ui/feature/Header'
import { Footer } from 'src/ui/feature/Footer'
import { Contact } from 'src/ui/feature/Contact'

export const IndexPage = () => {
  const { t } = useLocale()
  const getIsLast = useCallback(
    (value: number) => value === t.faqArray.length - 1,
    [t.faqArray.length]
  )

  const { onClickHero, contactUseRef, onClickContact } = useScroll()
  const getIsFirst = (value: number) => value === 0
  return (
    <>
      <Header onClickHero={onClickHero} onClickContact={onClickContact} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.faq}</Typography>
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
      <div ref={contactUseRef}>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
