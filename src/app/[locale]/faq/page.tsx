import { IndexPage } from 'src/ui/pages/faq'
import { ResolvingMetadata } from 'next'
import { LanguageKey } from 'src/constants/language'

type Props = {
  params: { locale: LanguageKey }
}
export default function Page({ params }: Props, parent: ResolvingMetadata) {
  const lang = params.locale
  return <IndexPage lang={lang} />
}
