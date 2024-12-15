import { Metadata, ResolvingMetadata } from 'next'
import { generateLocalesWithoutEn, getLocaleFile } from 'src/utils/language'

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
  return t.metas.terms.index
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
