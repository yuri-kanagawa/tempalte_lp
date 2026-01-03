import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Footer } from 'src/features/locale/footer'
import { Contact } from 'src/features/locale/contact'
import type { Locale } from 'src/domains/valueObjects/locale'
import { Header } from 'src/features/locale/header'
import { ContainerBox, AccordionItem } from 'src/ui/fragments'
import { styles } from 'src/config/styles'

type AccordionItem = {
  readonly title: string
  readonly body: string
  readonly linkText?: string
  readonly url?: string
}

type Props = {
  locale: Locale
  title: string
  items: readonly AccordionItem[]
}

export const AccordionTemplate: FC<Props> = ({ locale, title, items }) => {
  return (
    <>
      <Header locale={locale} />
      <ContainerBox background="black">
        <Stack spacing={4} sx={{ width: '100%' }}>
          <Typography sx={{ color: 'white', ...styles.typography.titleFontSize, textAlign: 'center' }}>
            {title}
          </Typography>
          <Stack spacing={0} sx={{ width: '100%' }}>
            {items.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  title={item.title}
                  body={item.body}
                  linkText={item.linkText}
                  url={item.url}
                  isFirst={index === 0}
                  isLast={index === items.length - 1}
                />
              )
            })}
          </Stack>
        </Stack>
      </ContainerBox>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
