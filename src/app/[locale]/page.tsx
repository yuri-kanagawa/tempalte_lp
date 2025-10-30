import type { Metadata, ResolvingMetadata } from 'next'
import { IndexPage } from 'src/ui/pages/index'
import { Language } from 'src/domains/valueObjects/language'

type Props = {
  params: { locale: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = Language.create(params.locale).language ?? Language.default()
  const t = language.locale
  return t.metas.index
}

export default function Page({ params }: Props) {
  const language = Language.create(params.locale).language ?? Language.default()
  return <IndexPage language={language} />
}
