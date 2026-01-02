import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Footer } from 'src/features/language/components/footer'
import { Contact } from 'src/features/language/components/contact'
import type { Locale } from 'src/domains/valueObjects/locale'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { Header } from 'src/features/language/components/header'

type AccordionItem = {
  readonly title: string
  readonly body: string
}

type Props = {
  locale: Locale
  title: string
  items: readonly AccordionItem[]
}

export const AccordionTemplate: FC<Props> = ({ locale, title, items }) => {
  return (
    <>
      <Header language={locale} />
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ color: 'white', fontSize: 40 }}>{title}</Typography>
        {items.map((item, index) => {
          return (
            <StyledAccordion
              key={index}
              title={item.title}
              explain={item.body}
              isFirst={index === 0}
              isLast={index === items.length - 1}
            />
          )
        })}
      </Stack>
      <Contact language={locale} />
      <Footer language={locale} />
    </>
  )
}

