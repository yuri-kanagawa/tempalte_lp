import {
  onClickContact,
  onClickDownload,
  onClickHowToUse,
  scroll
} from 'src/constants/scroll'
import { LanguageSelect } from 'src/ui/feature/Header/internal/LanguageSelect'
import React from 'react'
import { LanguageKey } from 'src/constants/language'
import { getLocaleFile } from 'src/utils/language'
import { HeaderText } from 'src/ui/feature/Header/internal/HeaderRight/internal'

type Props = {
  lang: LanguageKey
  currentPath: string
}

export const HeaderRight: React.FC<Props> = ({ lang, currentPath }) => {
  const t = getLocaleFile(lang)

  const isRootPage = currentPath === '/'
  return (
    <>
      <HeaderText
        isRootPage={isRootPage}
        pathname={'/'}
        query={{ scroll: scroll.howToUse }}
        onClick={onClickHowToUse}>
        {t.word.howToUse}
      </HeaderText>
      <HeaderText
        isRootPage={isRootPage}
        pathname={'/'}
        query={{ scroll: scroll.download }}
        onClick={onClickDownload}>
        {t.word.download}
      </HeaderText>
      <HeaderText
        isRootPage={isRootPage}
        pathname={'/'}
        query={{ scroll: scroll.contact }}
        onClick={onClickContact}>
        {t.word.contact}
      </HeaderText>
      <LanguageSelect lang={lang} currentPath={currentPath} />
    </>
  )
}
