'use client'
import { IndexPage } from 'src/ui/pages/faq'
import { ResolvingMetadata } from 'next'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps, parent: ResolvingMetadata) {
  const language = Locale.create(params.locale).locale ?? Locale.default()
  return <IndexPage language={language} />
}
