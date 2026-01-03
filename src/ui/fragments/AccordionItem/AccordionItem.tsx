'use client'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { YouTubeHighlighter } from 'src/ui/fragments'

type Props = {
  title: string
  body: string
  linkText?: string
  url?: string
  isFirst?: boolean
  isLast?: boolean
}

export const AccordionItem: React.FC<Props> = (props) => {
  const { title, body, linkText, url, isFirst, isLast } = props
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => setIsOpen(!isOpen)

  return (
    <Accordion disableGutters>
      <AccordionSummary
        onClick={onClick}
        expandIcon={<ExpandMoreIcon sx={{ color: isOpen ? 'white' : null }} />}
        sx={{
          background: isOpen ? 'black' : 'white',
          color: isOpen ? 'white' : 'black',
          border: 1,
          borderTopRightRadius: isFirst ? 2 : 0,
          borderTopLeftRadius: isFirst ? 2 : 0,
          borderBottomRightRadius: isLast ? 2 : 0,
          borderBottomLeftRadius: isLast ? 2 : 0,
          borderColor: 'white',
          minWidth: { xs: '100%', sm: 500 },
          width: '100%'
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <YouTubeHighlighter text={body} linkText={linkText} url={url} />
      </AccordionDetails>
    </Accordion>
  )
}

