import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Locale } from 'src/domains/valueObjects/locale'

type LanguageParams = {
  locale: string
}

export type LanguageProps = {
  params: Promise<LanguageParams>
}

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return Locale.getPageLanguages().map(({ key }) => ({ locale: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params
  const result = Locale.create(resolvedParams.locale)
  const locale = result.locale ?? Locale.default()
  const t = locale.translation
  return t.metas.index
}

export default async function Layout({
  children,
  params
}: React.PropsWithChildren<LanguageProps>) {
  await params
  return <>{children}</>
}
