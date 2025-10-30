import { Metadata } from 'next'
import { en } from 'src/locales/en'

type Props = {
  params: {}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return en.metas.faq
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
