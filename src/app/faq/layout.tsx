import { Metadata } from 'next'
import { enUS } from 'src/locales/en-US'

type Props = {
  params: {}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return enUS.metas.faq
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
