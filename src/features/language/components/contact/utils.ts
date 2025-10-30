import { MediaQueryType } from 'src/hooks/useMediaQuerySize'

export const DefaultIconSize = 80 as const
export const TikTokIconSize = 80 as const
export const BiliBiliIconSize = 90 as const

export type IconSizeMediaType = Pick<
  MediaQueryType,
  'isLaptopSize' | 'isTabletSize' | 'isMobileSize'
>

export const createIconSizeCalculator =
  (props: IconSizeMediaType) =>
  (size: number): number => {
    if (props.isLaptopSize) return size
    else if (props.isTabletSize) return size * 0.8
    else if (props.isMobileSize) return size / 2
    else return size * 1.3
  }

export type ColumnSpacingMediaType = Pick<MediaQueryType, 'isOverTabletSize' | 'isTabletSize'>

export const getColumnSpacing = (props: ColumnSpacingMediaType): number => {
  if (props.isOverTabletSize) return 5
  else if (props.isTabletSize) return 3
  else return 1
}
