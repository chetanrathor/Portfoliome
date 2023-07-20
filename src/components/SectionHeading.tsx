import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

interface Prop {
    heading:string,
    subtitle:string,
    alignItems?:string

}

const SectionHeading = ({heading,subtitle,alignItems}:Prop) => {

  const getAlignItems = ()=>{
    if(!alignItems){
      return {alignItem:'center',margin:'auto'}
    }
    return {alignItem:alignItems,margin:''}
  }

  return (
    <div>
      <Grid container alignItems={getAlignItems().alignItem} gap={2} direction={'column'}>
          <Grid item>
            <Typography variant='h3' color={theme.palette.secondary.main}>{heading}</Typography>
          </Grid>
          <Grid item>
            <Typography textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>{subtitle}</Typography>
          </Grid>
          <Typography borderBottom={'solid'} margin={getAlignItems().margin} width={'103px'} height={'2px'} borderColor={theme.palette.primary.main}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>

        </Grid>
    </div>
  )
}

export default SectionHeading
