import { Box, Fade, Grid, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { theme } from '../theme';
import ButtonComponent from './ButtonComponent';
const Hero = () => {
    return (
        <div>
        
            <Box>
                <Grid container maxWidth={'lg'} margin={'auto'}>

                    <Grid item container direction={'column'} justifyContent={'center'} lg={7} >
                        <Grid lg={1} container gap={3} justifyContent={'center'} direction={'column'}  >
                            <LinkedInIcon sx={{ color: theme.palette.secondary.main }} />
                            <InstagramIcon sx={{ color: theme.palette.secondary.main }}></InstagramIcon>
                            <FacebookIcon sx={{ color: theme.palette.secondary.main }}></FacebookIcon>
                            <GitHubIcon sx={{ color: theme.palette.secondary.main }}></GitHubIcon>
                        </Grid>
                        <Grid lg={11} justifyContent={'center'} container direction={'column'} gap={5}>
                            <Grid container direction={'column'} gap={2} >
                                <Typography variant='h1' color={theme.palette.secondary.main}>
                                    I'm Web Developer
                                    Natalie E. Watson
                                </Typography>
                                <Typography variant='subtitle1' color={theme.palette.success.main}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
                                    luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem
                                    ipsum.
                                </Typography>
                            </Grid>
                            <Box>

                                <ButtonComponent><Typography variant='subtitle1' >Learn More</Typography></ButtonComponent>
                            </Box>
                        </Grid>

                    </Grid>
                    <Grid item lg={5} >
                        <img src={process.env.PUBLIC_URL + '/images/hero.png'} height={675} width={471} alt="" />
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}

export default Hero
