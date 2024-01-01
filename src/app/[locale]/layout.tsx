import React from 'react'
import { getIsEnglish, isExistLanguage } from 'src/utils/language'
import { redirect } from 'next/navigation'

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
