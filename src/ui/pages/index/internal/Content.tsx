import { MovieBox } from 'src/ui/pages/index/internal/MovieBox/MovieBox'
import React, { FC } from 'react'
import { LanguageKey } from 'src/constants/language'

type Props = {
  lang: LanguageKey
}
export const Content: FC<Props> = ({ lang }) => {
  return (
    <>
      <MovieBox lang={lang} />
    </>
  )
}
