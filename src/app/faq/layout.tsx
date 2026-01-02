import { Metadata } from 'next'
import { enUS } from 'src/locales/en-US'

type Props = {
  params: Promise<{}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  return enUS.metas.faq
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{}>
}) {
  await params
  return <>{children}</>
}
