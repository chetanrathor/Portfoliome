import { Box, SxProps } from '@mui/material'
import React from 'react'


interface Prop{
    sx?: SxProps
}
const PaddingWrapper = ({sx}:Prop) => {
  return (
    <Box component={'div'}sx={sx}></Box>
  )
}

export default PaddingWrapper
