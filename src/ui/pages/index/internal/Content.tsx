import { MovieBox } from 'src/ui/pages/index/internal/MovieBox/MovieBox'
import React, { FC } from 'react'
import type { Language } from 'src/domains/valueObjects/language'

type Props = {
  language: Language
}
export const Content: FC<Props> = ({ language }) => {
  return (
    <>
      <MovieBox language={language} />
    </>
  )
}
