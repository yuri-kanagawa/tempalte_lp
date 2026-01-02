'use client'
import { FaqPage } from 'src/ui/pages/faq'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <FaqPage locale={Locale.default()} />
}
