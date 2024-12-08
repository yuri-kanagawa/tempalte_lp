'use client'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { YouTubeHighlighter } from 'src/ui/feature/Text'

type Props = {
  title: string
  explain: string
  isFirst?: boolean
  isLast?: boolean
}

export const StyledAccordion: React.FC<Props> = props => {
  const { title, explain, isFirst, isLast } = props
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
          minWidth: 500
        }}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <YouTubeHighlighter text={explain} />
      </AccordionDetails>
    </Accordion>
  )
}
