import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import Seprator from './Seprator'


interface Prop{
    heading:string
}


const PageHeading = ({heading}:Prop) => {
    return (
        <div >
            <Box component={'div'}sx={{backgroundColor:'#FEFAFA'}}>
                <Box component={'div'}maxWidth={'lg'} margin={'auto'} textAlign={'center'} padding={10}>
                    <Typography variant='h2' color={theme.palette.secondary.main} margin={2}>{heading}</Typography>
                    <Seprator width='122px'></Seprator>
                </Box>
            </Box>
        </div>
    )
}

export default PageHeading
