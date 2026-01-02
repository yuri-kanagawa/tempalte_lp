'use client'
import { HomePage } from 'src/ui/pages/index'
import { Locale } from 'src/domains/valueObjects/locale'

export default function Page() {
  return <HomePage language={Locale.default()} />
}
