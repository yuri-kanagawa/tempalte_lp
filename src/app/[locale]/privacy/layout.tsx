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
  const language = Language.create(params.locale).language ?? Language.default()
  const t = language.locale
  return t.metas.privacyPolicy
}

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  return <>{children}</>
}


