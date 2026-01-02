'use client'
import { PrivacyPage } from 'src/ui/pages/privacy'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <PrivacyPage language={Locale.default()} />
}
