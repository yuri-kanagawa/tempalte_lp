'use client'
import { use } from 'react'
import { HomePage } from 'src/ui/pages/index'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from './layout'

export default function Page({ params }: LanguageProps) {
  const resolvedParams = use(params)
  const language = Locale.create(resolvedParams.locale).locale ?? Locale.default()
  return <HomePage locale={language} />
}
