import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { useLocale } from 'src/hooks/useLocal'
import { useCallback } from 'react'

export const IndexPage = () => {
  const { t } = useLocale()
  const getIsLast = useCallback(
    (value: number) => value === t.termArray.length - 1,
    [t.termArray.length]
  )
  const getIsFirst = (value: number) => value === 0
  return (
    <Box sx={{ pt: 10, background: 'black' }}>
      <Stack
        py={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography sx={{ color: 'white', fontSize: 40 }}>{t.terms}</Typography>
        {t.termArray.map((e, index) => {
          return (
            <StyledAccordion
              key={index}
              title={e.heading}
              explain={e.content}
              isFirst={getIsFirst(index)}
              isLast={getIsLast(index)}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
