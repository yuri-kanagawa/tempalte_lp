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
  const href = query
    ? {
        pathname,
        query
      }
    : pathname

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </Link>
  )
}
