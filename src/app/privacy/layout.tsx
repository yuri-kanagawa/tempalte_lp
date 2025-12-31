import { Metadata } from 'next'
import { enUS } from 'src/locales/en-US'

export async function generateMetadata(): Promise<Metadata> {
  return enUS.metas.privacyPolicy
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
