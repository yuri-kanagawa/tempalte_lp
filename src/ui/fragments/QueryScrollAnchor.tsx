'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export type QueryScrollAnchorProps = {
  id: string
  queryKey?: string
  queryValue: string
  behavior?: ScrollBehavior
}

export const QueryScrollAnchor: React.FC<QueryScrollAnchorProps> = ({
  id,
  queryKey = 'scroll',
  queryValue,
  behavior = 'smooth'
}) => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (searchParams.get(queryKey) !== queryValue) return

    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior })
    // NOTE: remove scroll query param if desired
    // removeScrollQueryParameter()
  }, [searchParams, id, queryKey, queryValue, behavior])

  return <div id={id} />
}
