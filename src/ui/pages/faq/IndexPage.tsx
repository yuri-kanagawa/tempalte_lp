import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { AccordionTemplate } from 'src/ui/templates'

type Props = {
  locale: Locale
}

export const IndexPage: FC<Props> = ({ locale }) => {
  const t = locale.translation

  const items = t.messages.faq.map((item) => ({
    title: item.q,
    body: item.a
  }))

  return <AccordionTemplate locale={locale} title={t.words.faq} items={items} />
}
