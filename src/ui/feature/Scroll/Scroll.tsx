import { Link, LinkProps } from 'react-scroll'
import React from 'react'

type Props = Omit<LinkProps, 'ref' | 'key'> & {
  text: string
}

export const Scroll = (props: Props) => {
  const { text, ...rest } = props
  return <Link {...rest}>{text}</Link>
}
