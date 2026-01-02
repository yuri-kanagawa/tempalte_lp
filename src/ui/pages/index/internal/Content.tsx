import { MovieBox } from 'src/ui/pages/index/internal/MovieBox/MovieBox'
import React, { FC } from 'react'
import type { Locale } from 'src/domains/valueObjects/locale'

type Props = {
  locale: Locale
}
export const Content: FC<Props> = ({ locale }) => {
  return (
    <>
      <MovieBox locale={locale} />
    </>
  )
}
