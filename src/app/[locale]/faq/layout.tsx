import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

type Params = LanguageProps['params']

export async function generateStaticParams(): Promise<Params[]> {
  return Locale.getPageLanguages().map(({ key }) => ({ locale: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = Locale.create(params.locale).locale ?? Locale.default()
  const t = language.locale
  return t.metas.faq
}

export default function Layout({ children, params }: React.PropsWithChildren<LanguageProps>) {
  return <>{children}</>
}
