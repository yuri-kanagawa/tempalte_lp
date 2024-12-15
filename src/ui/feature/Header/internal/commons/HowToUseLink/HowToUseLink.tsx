import { LanguageKey } from 'src/constants/language'
import { LinkText } from '../LinkText'
import { getLocaleFile } from 'src/utils/language'
import { FC } from 'react'
import { onClickHowToUse, scroll } from 'src/constants/scroll'

type Props = {
  lang: LanguageKey
  currentPath: string
}
export const HowToUseLink: FC<Props> = ({ lang, currentPath }) => {
  const t = getLocaleFile(lang)

  const isRootPage = currentPath === '/'
  return (
    <LinkText
      currentPath={currentPath}
      pathname={'/'}
      query={{ scroll: scroll.howToUse }}
      onClick={onClickHowToUse}>
      {t.word.howToUse}{' '}
    </LinkText>
  )
}
