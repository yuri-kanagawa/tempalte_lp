import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { useLocale } from 'src/hooks/useLocal'
import { useCallback } from 'react'

export const IndexPage = () => {
  const { t } = useLocale()
  const getIsLast = useCallback(
    (value: number) => value === t.privacyPolicyArray.length - 1,
    [t.privacyPolicyArray.length]
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
        <Typography sx={{ color: 'white', fontSize: 40 }}>
          {t.privacyPolicy}
        </Typography>
        {t.privacyPolicyArray.map((e, index: number) => {
          return (
            <StyledAccordion
              key={index}
              title={e.question}
              explain={e.answer}
              isFirst={getIsFirst(index)}
              isLast={getIsLast(index)}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
