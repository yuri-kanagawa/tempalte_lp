import type { Language } from 'src/domains/valueObjects/language'
import { LinkText } from '../LinkText'
import { getLocaleFile } from 'src/utils/language'
import { FC } from 'react'
import { onClickHowToUse, scroll } from 'src/constants/scroll'

type Props = {
  language: Language
  currentPath: string
}
export const HowToUseLink: FC<Props> = ({ language, currentPath }) => {
  const t = language.locale

  const isRootPage = currentPath === '/'
  return (
    <LinkText
      currentPath={currentPath}
      pathname={'/'}
      query={{ scroll: scroll.howToUse }}
      onClick={onClickHowToUse}>
      {t.words.howToUse}{' '}
    </LinkText>
  )
}
