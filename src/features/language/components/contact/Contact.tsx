import type { Language } from 'src/domains/valueObjects/language'
import { FC } from 'react'
import { ScrollContact } from './_components'
import { ContainerBox } from 'src/ui/fragments'
import { Scroll as ScrollConstants } from '@lib/scrolls'

type Props = {
  language: Language
}

export const Contact: FC<Props> = ({ language }) => {
  const locale = language.locale
  return (
    <ContainerBox
      id={ScrollConstants.CONTACT}
      background="white"
      label={locale.words.contact}
      labelColor="black"
    >
      <ScrollContact language={language} />
    </ContainerBox>
  )
}
