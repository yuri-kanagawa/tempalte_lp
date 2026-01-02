'use client'
import { TermsPage } from 'src/ui/pages/terms'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <TermsPage language={Locale.default()} />
}
