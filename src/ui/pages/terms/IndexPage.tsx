import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { useLocale } from 'src/hooks/useLocal'
import React, { useCallback } from 'react'
import { Header } from 'src/ui/feature/Header'
import { useScroll } from 'src/hooks/useScroll'
import { Contact } from 'src/ui/feature/Contact'
import { Footer } from 'src/ui/feature/Footer'

export const IndexPage = () => {
  const { t } = useLocale()
  const getIsLast = useCallback(
    (value: number) => value === t.termArray.length - 1,
    [t.termArray.length]
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
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.terms}</Typography>
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
      <div ref={contactUseRef}>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
