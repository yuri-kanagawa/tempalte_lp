'use client'
import { IndexPage } from 'src/ui/pages/privacy-policy'
import { ResolvingMetadata } from 'next'
import { Language } from 'src/domains/valueObjects/language'

type Props = {
  params: { locale: string }
}
export default function Page({ params }: Props, parent: ResolvingMetadata) {
  const language = Language.create(params.locale).language ?? Language.default()
  return <IndexPage language={language} />
}
