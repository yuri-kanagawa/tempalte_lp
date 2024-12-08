import type { Metadata, ResolvingMetadata } from 'next'
import { IndexPage } from 'src/ui/pages/index'
import { LanguageKey } from 'src/constants/language'

type Props = {
  params: { locale: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = params.locale

  return {
    title: locale,
    description: '',
    themeColor: 'black',

    openGraph: {
      images: [
        {
          url: '',
          height: '',
          width: ''
        }
      ]
    },
    twitter: {}
  }
}

export default function Page({ params }: Props) {
  const lang = params.locale as LanguageKey
  return <IndexPage lang={lang} />
}
