import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ label }: { label?: string }) => {
  return (

    <TextField sx={{ backgroundColor: '#FAFAFA' }} fullWidth id="outlined-basic" label={label} variant="outlined" />
    // </div>
  )
}

export default Input
