import type { Metadata } from 'next'
import { buildOgImages, buildTwitterImages } from 'src/locales/utils'
import { appName } from 'src/constants/app'

const DESCRIPTION = ''
export const faq: Metadata = {
  title: appName,
  description: DESCRIPTION,
  openGraph: {
    title: appName,
    description: DESCRIPTION,
    images: buildOgImages(appName)
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: DESCRIPTION,
    images: buildTwitterImages()
  }
}
