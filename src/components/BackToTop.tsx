import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Box } from '@mui/system';
import { theme } from '../theme';
import { Grid } from '@mui/material';
const BackToTop = () => {
    return (
        <Grid onClick={()=>{
            window.scrollTo({behavior:'smooth',top:0,})
        }} container justifyContent={'center'}  alignItems={'center'} sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            margin:'10px'
        }}>
            <KeyboardArrowUpOutlinedIcon  sx={{ color: 'white' }} fontSize={'large'}></KeyboardArrowUpOutlinedIcon>
        </Grid>
    )
}

export default BackToTop