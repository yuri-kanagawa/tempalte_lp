import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

type Props = {
  title: string
  explain?: string
  explainComponent?: React.ReactNode
  isFirst?: boolean
  isLast?: boolean
}

export const StyledAccordion: React.FC<Props> = props => {
  const { title, explain, explainComponent, isFirst, isLast } = props
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => setIsOpen(!isOpen)

  return (
    <Accordion disableGutters onClick={onClick}>
      <AccordionSummary
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
        {explain && <Typography>{explain}</Typography>}
        {explainComponent && explainComponent}
      </AccordionDetails>
    </Accordion>
  )
}
