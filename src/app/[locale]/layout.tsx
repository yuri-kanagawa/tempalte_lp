import React from 'react'
import {
  generateLocalesWithoutEn,
  getIsEnglish,
  getLocaleFile,
  isExistLanguage
} from 'src/utils/language'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import * as console from 'console'

type Params = {
  locale: string
}

type Props = {
  params: Params
}

export const dynamicParams = true

export async function generateStaticParams(): Promise<Params[]> {
  return generateLocalesWithoutEn()
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = params.locale

  const t = getLocaleFile(locale)
  return t.metas.index
}

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale
  if (getIsEnglish(locale) || !isExistLanguage(locale)) return redirect('/')
  return <>{children}</>
}
