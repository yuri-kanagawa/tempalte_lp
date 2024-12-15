import { LanguageKey } from 'src/constants/language'
import { LinkText } from '../LinkText'
import { getLocaleFile } from 'src/utils/language'
import { FC } from 'react'
import { onClickContact, onClickHowToUse, scroll } from 'src/constants/scroll'

type Props = {
  lang: LanguageKey
  currentPath: string
}
export const ContactLink: FC<Props> = ({ lang, currentPath }) => {
  const t = getLocaleFile(lang)

  return (
    <LinkText
      currentPath={currentPath}
      pathname={'/'}
      query={{ scroll: scroll.contact }}
      onClick={onClickContact}>
      {t.word.contact}
    </LinkText>
  )
}
