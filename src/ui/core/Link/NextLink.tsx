import React, { FC } from 'react'
import Link from 'next/link'

export type NextLinkProps = {
  pathname: string
  query?: {
    [key: string]: string
  }
  children: React.ReactNode
}

export const NextLink: FC<NextLinkProps> = ({ pathname, query, children }) => {
  return (
    <Link
      href={{
        pathname,
        query
      }}
      passHref
      legacyBehavior>
      {children}
    </Link>
  )
}
