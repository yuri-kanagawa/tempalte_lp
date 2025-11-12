'use client'
import { IndexPage } from 'src/ui/pages/terms'
import { Language } from 'src/domains/valueObjects/language'
import type { LanguageProps } from '../layout'

export default function Page({ params }: LanguageProps) {
  const language = Language.create(params.language).language ?? Language.default()
  return <IndexPage language={language} />
}
