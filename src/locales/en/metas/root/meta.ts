import { Metadata } from 'next'
import { appName, OGP_IMAGE_URL } from 'src/constants/app'
import ogImage from 'src/app/opengraph-image.png'
import { getIndexMeta } from 'src/locales/utils'

const DESCRIPTION = ''
const meta: Metadata = {
  title: appName,
  description: DESCRIPTION,
  openGraph: {
    title: appName,
    description: DESCRIPTION,
    images: [
      {
        url: OGP_IMAGE_URL,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: OGP_IMAGE_URL,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  }
}

export const IndexMeta = getIndexMeta(meta)
