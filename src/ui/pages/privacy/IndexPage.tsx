import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'
import { AccordionTemplate } from 'src/ui/templates'

type Props = {
  language: Locale
}

export const IndexPage: FC<Props> = ({ language }) => {
  const t = language.translation

  return (
    <AccordionTemplate
      locale={language}
      title={t.words.privacyPolicy}
      items={t.messages.privacyPolicy}
    />
  )
}
