import React from 'react'
import { Typography } from '@mui/material'

type Props = {
  text: string
  linkText?: string
  url?: string
}

export const YouTubeHighlighter = ({ text, linkText, url }: Props) => {
  // linkTextとurlが指定されていない場合は、そのままテキストを返す
  if (!linkText || !url) {
    return <Typography>{text}</Typography>
  }

  const parts: (string | React.ReactElement)[] = []
  let lastIndex = 0
  let keyIndex = 0

  // linkTextがテキスト内に含まれているかチェック
  const linkTextIndex = text.indexOf(linkText)

  if (linkTextIndex !== -1) {
    // linkTextの前のテキスト
    if (linkTextIndex > lastIndex) {
      parts.push(text.substring(lastIndex, linkTextIndex))
    }

    // linkTextをリンクにする
    parts.push(
      <a key={keyIndex++} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {linkText}
      </a>
    )

    lastIndex = linkTextIndex + linkText.length
  }

  // 残りのテキスト
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  // linkTextが見つからなかった場合は元のテキストを返す
  if (parts.length === 0) {
    return <Typography>{text}</Typography>
  }

  return <Typography>{parts}</Typography>
}

