import { useMediaQuery } from '@mui/material'
import { theme } from 'src/config/theme'
import { useLayoutEffect, useState } from 'react'

export function useMediaQuerySize() {
  const isMobileSize = useMediaQuery(() => theme.breakpoints.down('sm'))

  const isOverMobileSize = useMediaQuery(() => theme.breakpoints.up('sm'))
  const isLessTabletSize = useMediaQuery(() => theme.breakpoints.down('md'))
  const isTabletSize = isOverMobileSize && isLessTabletSize

  const isOverTabletSize = useMediaQuery(() => theme.breakpoints.up('md'))
  const isLessDesktop = useMediaQuery(() => theme.breakpoints.down('lg'))
  const isLaptopSize = isOverTabletSize && isLessDesktop

  const isOverDesktop = useMediaQuery(() => theme.breakpoints.up('lg'))
  const [size, setSize] = useState<WindowSizeType>({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return {
    isMobileSize,
    isOverMobileSize,
    isLessTabletSize,
    isTabletSize,
    isOverTabletSize,
    isLaptopSize,
    isLessDesktop,
    isDesktopSize: isOverDesktop,
    width: size.width,
    height: size.height
  }
}

type WindowSizeType = {
  width: number
  height: number
}

export type MediaQueryType = ReturnType<typeof useMediaQuerySize>
