import { Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

interface Prop{
    width:string,
    
}

const Seprator = ({width}:Prop) => {
  return (
    <div>
          <Typography borderBottom={'solid'} margin={'auto'} width={width} height={'2px'} borderColor={theme.palette.primary.main}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
      
    </div>
  )
}

export default Seprator
