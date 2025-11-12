import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Language } from 'src/domains/valueObjects/language'
import type { LanguageProps } from '../layout'
import { redirect } from 'next/navigation'
type Params = LanguageProps['params']

export async function generateStaticParams(): Promise<Params[]> {
  return Language.getPageLanguages().map(({ key }) => ({ language: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = Language.create(params.language).language ?? Language.default()
  const t = language.locale
  return t.metas.terms
}

export default function Layout({ children, params }: React.PropsWithChildren<LanguageProps>) {
  const language = Language.create(params.language).language
  if (!language) return redirect('/terms')
  if (language.isEnglish) return redirect('/terms')
  return <>{children}</>
}
