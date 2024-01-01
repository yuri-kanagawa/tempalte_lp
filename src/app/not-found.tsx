'use client'
import { Button, Stack, Typography } from '@mui/material'
import { whiteButtonStyle } from 'src/styles/buttonStyle'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function NotFoundPage() {
  useEffect(() => redirect('/'), [])
  return (
    <Stack
      pt={10}
      spacing={2}
      sx={{
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
      height={'100vh'}>
      <Typography sx={{ color: 'white' }}>fsddsfds</Typography>
      <Button
        variant={'outlined'}
        sx={whiteButtonStyle}
        // onClick={clickTop}
      >
        gdfgdfg
      </Button>
    </Stack>
  )
}
