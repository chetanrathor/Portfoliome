import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import ProgressBar from './ProgressBar'

interface Prop{
    title:string,
    duration:string,
    description:string,
    linePercent:number
}


const SkillCart = ({description,duration,linePercent,title}:Prop) => {
    return (
        <div>
            <Grid gap={2} padding={2} container direction={'column'} sx={{ backgroundColor: theme.palette.warning.main,borderRadius:'10px' }}>
                <Typography variant='h6' color={'#000'}>
                   {title}
                </Typography>
                <Typography variant='subtitle1' color={theme.palette.primary.main}>{duration}</Typography>
                <Typography variant='subtitle1' color={'#35373A'}>{description}</Typography>
                <ProgressBar percent={linePercent}></ProgressBar>
            </Grid>
        </div>
    )
}

export default SkillCart
