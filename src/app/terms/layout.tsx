import { Metadata } from 'next'
import { en } from 'src/locales/en'

export async function generateMetadata(): Promise<Metadata> {
  return en.metas.terms
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
