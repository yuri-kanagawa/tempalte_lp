import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { Language } from 'src/domains/valueObjects/language'

type LanguageParams = {
  language: string
}

export type LanguageProps = {
  params: LanguageParams
}

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return Language.getPageLanguages().map(({ key }) => ({ language: key }))
}

export async function generateMetadata(
  { params }: LanguageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = Language.create(params.language)
  const language = result.language ?? Language.default()
  const t = language.locale
  return t.metas.index
}

export default function Layout({ children, params }: React.PropsWithChildren<LanguageProps>) {
  const result = Language.create(params.language)
  if (!result.isSuccess) return redirect('/')
  const language = result.language!
  if (language.isEnglish) return redirect('/')
  return <>{children}</>
}
