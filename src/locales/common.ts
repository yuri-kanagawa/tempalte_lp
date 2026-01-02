import ogImage from 'src/app/opengraph-image.png'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ledenm.com'
export const OGP_IMAGE_URL = `${BASE_URL}/${ogImage.src}`

export const APP_STORE_URL = 'https://www.youtube.com/watch?v=V69AcgtZ3lM'
export const GOOGLE_STORE_URL = 'https://www.youtube.com/watch?v=V69AcgtZ'
export const WEB_APP_URL = 'https://www.youtube.com/watch?v=V69AcgtZ'

export const appName = 'AppName'

export const common = {
  app: 'APP',
  appStoreUrl: '',
  googleStoreUrl: ''
} as const

export type CommonLocaleType = typeof common
