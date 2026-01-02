'use client'
import { use } from 'react'
import { PrivacyPage } from 'src/ui/pages/privacy'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps) {
  const resolvedParams = use(params)
  const language = Locale.create(resolvedParams.locale).locale ?? Locale.default()
  return <PrivacyPage language={language} />
}
