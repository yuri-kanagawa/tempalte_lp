'use client'
import { scroll } from 'src/constants/scroll'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { removeScrollQueryParameter } from 'src/utils/queryParameter'

export const Scroll = () => {
  const searchParams = useSearchParams()
  const scrollQueryParameter = searchParams.get('scroll')
  useEffect(() => {
    const element = document.getElementById(scroll.download)
    if (
      typeof window !== 'undefined' &&
      scrollQueryParameter === scroll.download &&
      element
    ) {
      element.scrollIntoView({ behavior: 'smooth' })
      removeScrollQueryParameter()
    }
  }, [scrollQueryParameter])
  return <div id={scroll.download}></div>
}
