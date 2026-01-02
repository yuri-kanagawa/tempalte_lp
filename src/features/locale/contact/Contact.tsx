import type { Locale } from 'src/domains/valueObjects/locale'
import { FC } from 'react'
import { ScrollContact } from './ScrollContact'
import { ContainerBox } from 'src/ui/fragments'
import { Scroll as ScrollConstants } from '@lib/scrolls'

type Props = {
  locale: Locale
}

export const Contact: FC<Props> = ({ locale }) => {
  const localeTranslation = locale.translation
  return (
    <ContainerBox
      id={ScrollConstants.CONTACT}
      background="white"
      label={localeTranslation.words.contact}
      labelColor="black"
    >
      <ScrollContact locale={locale} />
    </ContainerBox>
  )
}
