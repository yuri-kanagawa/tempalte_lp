import { Box, Stack, Typography, SxProps, Theme } from '@mui/material'
import { FC, useMemo } from 'react'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'
import { QueryScrollAnchor } from 'src/ui/cores'
import { styles } from 'src/config/styles'
type Props = {
  id?: string
  background?: string
  label?: string
  labelColor?: string
  sx?: SxProps<Theme>
  children: React.ReactNode
}

export const ContainerBox: FC<Props> = ({
  id,
  background,
  label,
  labelColor = 'white',
  sx,
  children
}) => {
  const { isMobileSize, isLessDesktop, isDesktopSize } = useMediaQuerySize()
  const maxWidth = useMemo(() => {
    if (isMobileSize) return 400
    if (isLessDesktop) return 600
    if (isDesktopSize) return 900
    return 900
  }, [isDesktopSize, isLessDesktop, isMobileSize])
  return (
    <Box
      id={id}
      sx={{
        background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        py: 10,
        overflow: 'visible',
        ...sx
      }}
    >
      {id && <QueryScrollAnchor id={id} queryValue={id} />}
      <Stack spacing={4} sx={{ width: '100%', maxWidth, mx: 'auto' }}>
        {label && (
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: labelColor,
              ...styles.typography.titleFontSize
            }}
          >
            {label}
          </Typography>
        )}
        {children}
      </Stack>
    </Box>
  )
}
