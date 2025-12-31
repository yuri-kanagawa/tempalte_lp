import { useRouter } from 'next/navigation'
import { PathBuilder } from '@lib/routes'
import { Locale } from '@domains/valueObjects/locale'

type Props = {
  language: Locale
}

export const usePathNavigation = ({ language }: Props) => {
  const router = useRouter()

  const builder = new PathBuilder(language)

  const pushRoot = () => router.push(builder.root())
  const pushFaq = () => router.push(builder.faq())
  const pushTerms = () => router.push(builder.terms())
  const pushPrivacyPolicy = () => router.push(builder.privacyPolicy())

  return {
    builder,
    pushRoot,
    pushFaq,
    pushTerms,
    pushPrivacyPolicy
  }
}
