import type { Metadata } from 'next'
import { common } from 'src/locales/common'

export const DEFAULT_META: Pick<Metadata, 'title' | 'openGraph'> = {
  title: common.app + ' LP',
  openGraph: {
    title: common.app + ' LP'
  }
}
