import { Box, Stack, Typography } from '@mui/material'
import { StyledAccordion } from 'src/ui/feature/styled/StyledAccordion'
import { useLocale } from 'src/hooks/useLocal'

export const IndexPage = () => {
  const { locale, t } = useLocale()
  console.log(locale)
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
        <StyledAccordion title={'aaaaa'} explain={'423424'} isFirst={true} />
        <StyledAccordion title={'aaaaa'} explain={'423424'} />
        <StyledAccordion title={'aaaaa'} explain={''} isLast={true} />
      </Stack>
    </Box>
  )
}
