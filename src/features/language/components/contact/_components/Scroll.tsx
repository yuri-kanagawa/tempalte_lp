'use client'
import { Scroll as ScrollUtils } from '@lib/scrolls'
import { QueryScrollAnchor } from 'src/ui/fragments'

export const Scroll = () => {
  return (
    <QueryScrollAnchor
      id={ScrollUtils.CONTACT}
      queryValue={ScrollUtils.CONTACT}
    />
  )
}
