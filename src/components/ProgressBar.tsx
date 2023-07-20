import { Box } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import { Line } from 'rc-progress'

interface Prop{
  percent:number
}

const ProgressBar = ({percent}:Prop) => {
  return (
    <div>
      <Line percent={percent}   style={{height:'22px',width:'100%'}} strokeColor={theme.palette.primary.main} />
    </div>
  )
}

export default ProgressBar
