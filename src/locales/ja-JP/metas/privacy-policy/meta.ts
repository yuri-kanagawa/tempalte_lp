import type { Metadata } from 'next'
import { buildOgImages, buildTwitterImages } from 'src/locales/utils'
import { appName } from 'src/locales/common'

const DESCRIPTION = ''
export const privacyPolicy: Metadata = {
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
