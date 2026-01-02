'use client'
import { RootPage } from 'src/ui/pages/RootPage'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <RootPage locale={Locale.default()} />
}
