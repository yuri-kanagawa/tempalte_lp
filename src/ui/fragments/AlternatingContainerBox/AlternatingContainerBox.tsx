'use client'
import { FC, Children, ReactElement, cloneElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
  startWith?: 'black' | 'white'
}

export const AlternatingContainerBox: FC<Props> = ({ children, startWith = 'black' }) => {
  const childrenArray = Children.toArray(children) as ReactElement[]

  return (
    <>
      {childrenArray.map((child, index) => {
        const background = index % 2 === 0 ? startWith : startWith === 'black' ? 'white' : 'black'
        const labelColor = background === 'black' ? 'white' : 'black'

        return cloneElement(child, {
          key: child.key || index,
          background,
          labelColor
        } as any)
      })}
    </>
  )
}

