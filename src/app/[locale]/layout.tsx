import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { Language } from 'src/domains/valueObjects/language'

type Params = {
  locale: string
}

type Props = {
  params: Params
}

export async function generateStaticParams(): Promise<Params[]> {
  return Language.getPageLanguages().map(({ key }) => ({ locale: key }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = Language.create(params.locale)
  const language = result.language ?? Language.default()
  const t = language.locale
  return t.metas.index
}

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const result = Language.create(params.locale)
  if (!result.isSuccess) return redirect('/')
  const language = result.language!
  if (language.isEnglish) return redirect('/')
  return <>{children}</>
}
