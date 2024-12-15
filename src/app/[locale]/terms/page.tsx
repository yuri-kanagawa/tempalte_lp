import { IndexPage } from 'src/ui/pages/privacy-policy'
import { LanguageKey } from 'src/constants/language'
import { ResolvingMetadata } from 'next'

type Props = {
  params: { locale: LanguageKey }
}
export default function Page({ params }: Props, parent: ResolvingMetadata) {
  const lang = params.locale
  return <IndexPage lang={lang} />
}
