'use client'
import { IndexPage } from 'src/ui/pages/terms'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps) {
  const language = Locale.create(params.locale).locale ?? Locale.default()
  return <IndexPage language={language} />
}
