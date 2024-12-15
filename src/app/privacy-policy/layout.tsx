import { Metadata } from 'next'
import { en } from 'src/locales/en'

export const metadata: Metadata = en.metas.privacyPolicy.index
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
