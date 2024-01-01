import { IndexPage } from 'src/ui/pages/root'
import type { Metadata, ResolvingMetadata } from 'next'

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
  return <IndexPage />
}
