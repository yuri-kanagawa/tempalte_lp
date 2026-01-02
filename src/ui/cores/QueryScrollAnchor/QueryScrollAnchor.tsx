'use client'
import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { QueryParameter } from 'src/lib/queryParameters'

export type QueryScrollAnchorProps = {
  id: string
  queryKey?: string
  queryValue: string
  behavior?: ScrollBehavior
  children: React.ReactNode
}

const QueryScrollAnchorInner: React.FC<QueryScrollAnchorProps> = ({
  id,
  queryKey = 'scroll',
  queryValue,
  behavior = 'smooth',
  children
}) => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (searchParams.get(queryKey) !== queryValue) return

    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior })
    QueryParameter.remove(queryKey)
  }, [searchParams, id, queryKey, queryValue, behavior])

  return <div id={id}>{children}</div>
}

export const QueryScrollAnchor: React.FC<QueryScrollAnchorProps> = (props) => {
  return (
    <Suspense fallback={<div id={props.id}>{props.children}</div>}>
      <QueryScrollAnchorInner {...props} />
    </Suspense>
  )
}
