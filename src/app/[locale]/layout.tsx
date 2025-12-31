import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Locale } from 'src/domains/valueObjects/locale'

type LanguageParams = {
  locale: string
}

export type LanguageProps = {
  params: LanguageParams
}

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return Locale.getPageLanguages().map(({ key }) => ({ locale: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = Locale.create(params.locale)
  const language = result.locale ?? Locale.default()
  const t = language.locale
  return t.metas.index
}

export default function Layout({ children, params }: React.PropsWithChildren<LanguageProps>) {
  return <>{children}</>
}
