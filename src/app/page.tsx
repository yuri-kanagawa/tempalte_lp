'use client'
import { IndexPage } from 'src/ui/pages/index'
import { Language } from 'src/domains/valueObjects/language'

export default function Page() {
  return <IndexPage language={Language.default()} />
}
