import { IndexPage } from 'src/ui/pages/faq'
import { ResolvingMetadata } from 'next'
import { LanguageKey } from 'src/constants/language'

type Props = {
  params: { locale: string }
}
export default function Page({ params }: Props, parent: ResolvingMetadata) {
  const lang = params.locale as LanguageKey
  return <IndexPage lang={lang} />
}
