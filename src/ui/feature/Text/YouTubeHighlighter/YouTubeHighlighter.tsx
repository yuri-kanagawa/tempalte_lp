import React from 'react'
import { Typography } from '@mui/material'

type Props = {
  text: string
}

export const YouTubeHighlighter = (props: Props) => {
  const { text } = props
  const hasYouTube = text.includes('YouTube')
  if (hasYouTube) {
    const youtubePart = text.split('YouTube')
    return (
      <Typography>
        {youtubePart[0]}
        <a style={{ textDecoration: 'none' }} href={'https://www.youtube.com/watch?v=V69AcgtZ3lM'}>
          YouTube
        </a>
        {youtubePart[1]}
      </Typography>
    )
  }
  return <Typography>text</Typography>
}
