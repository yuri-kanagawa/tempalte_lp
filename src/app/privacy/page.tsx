'use client'
import { IndexPage } from 'src/ui/pages/privacy'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <IndexPage language={Locale.default()} />
}
