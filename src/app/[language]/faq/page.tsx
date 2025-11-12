'use client'
import { IndexPage } from 'src/ui/pages/faq'
import { ResolvingMetadata } from 'next'
import { Language } from 'src/domains/valueObjects/language'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps, parent: ResolvingMetadata) {
  const language = Language.create(params.language).language ?? Language.default()
  return <IndexPage language={language} />
}
