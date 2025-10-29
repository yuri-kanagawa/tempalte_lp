'use client'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Page: FC<Props> = ({ children }) => {
  return <div>Page</div>
}