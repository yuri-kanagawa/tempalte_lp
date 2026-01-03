'use client'
import { use } from 'react'
import { TermsPage } from 'src/ui/pages/terms'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps) {
  const resolvedParams = use(params)
  const locale = Locale.create(resolvedParams.locale).locale ?? Locale.default()
  return <TermsPage language={locale} />
}
