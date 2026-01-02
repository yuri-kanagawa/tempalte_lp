import { Metadata } from 'next'
import { enUS } from 'src/locales/en-US'

export async function generateMetadata(): Promise<Metadata> {
  return enUS.metas.privacyPolicy
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
