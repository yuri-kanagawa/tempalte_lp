import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Locale } from 'src/domains/valueObjects/locale'
import type { LanguageProps } from '../layout'

type Params = Awaited<LanguageProps['params']>

export async function generateStaticParams(): Promise<Params[]> {
  return Locale.getPageLanguages().map(({ key }) => ({ locale: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params
  const language = Locale.create(resolvedParams.locale).locale ?? Locale.default()
  const t = language.translation
  return t.metas.privacyPolicy
}

export default async function Layout({
  children,
  params
}: React.PropsWithChildren<LanguageProps>) {
  await params
  return <>{children}</>
}
