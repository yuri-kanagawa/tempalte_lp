'use client'
import { IndexPage } from 'src/ui/pages/terms'
import { Language } from 'src/domains/valueObjects/language'
import { ResolvingMetadata } from 'next'

type Props = {
  params: { locale: string }
}
export default function Page({ params }: Props, parent: ResolvingMetadata) {
  const language = Language.create(params.locale).language ?? Language.default()
  return <IndexPage language={language} />
}
