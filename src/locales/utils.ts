import type { Metadata } from 'next'

type OgImages = NonNullable<NonNullable<Metadata['openGraph']>['images']>
type TwitterImages = NonNullable<NonNullable<Metadata['twitter']>['images']>

/**
 * public/og/ に置いてあるOGP画像候補をまとめて返す。
 * - 先頭が最優先として扱われやすい（Facebook/Twitter等）
 * - PNG優先（WebP未対応クローラ対策）
 */
export function buildOgImages(alt: string): OgImages {
  return [
    { url: '/og/1200x630.png', width: 1200, height: 630, alt, type: 'image/png' },
    { url: '/og/1200x630.webp', width: 1200, height: 630, alt, type: 'image/webp' },
    { url: '/og/1200x628.png', width: 1200, height: 628, alt, type: 'image/png' },
    { url: '/og/1200x628.webp', width: 1200, height: 628, alt, type: 'image/webp' },
    { url: '/og/1200x1200.png', width: 1200, height: 1200, alt, type: 'image/png' },
    { url: '/og/1080x1080.png', width: 1080, height: 1080, alt, type: 'image/png' },
    { url: '/og/1080x1080.webp', width: 1080, height: 1080, alt, type: 'image/webp' },
    { url: '/og/800x418.png', width: 800, height: 418, alt, type: 'image/png' },
    { url: '/og/600x314.png', width: 600, height: 314, alt, type: 'image/png' },
    { url: '/og/512x512.png', width: 512, height: 512, alt, type: 'image/png' }
  ]
}

/**
 * Twitterカード用。
 * 多くの場合は先頭1枚しか採用されないため、基本は1200x630のPNGを返す。
 */
export function buildTwitterImages(): TwitterImages {
  return ['/og/1200x630.png']
}


