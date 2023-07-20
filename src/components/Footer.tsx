import React from 'react'
import Container from './Container'
import { Grid, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Wrapper from './Wrapper';
import { theme } from '../theme';
const Footer = () => {
    return (
        <div>
            <Container paddingY={5} shouldVisibleBackgroundImage={false} backgroundColor={theme.palette.secondary.main}>
                <Wrapper>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item container gap={4} lg={4} >
                            <LinkedInIcon sx={{color:'#fff'}}></LinkedInIcon>
                            <InstagramIcon sx={{color:'#fff'}}></InstagramIcon>
                            <GitHubIcon sx={{color:'#fff'}}></GitHubIcon>
                            <FacebookIcon sx={{color:'#fff'}}></FacebookIcon>
                        </Grid>
                        <Grid item container justifyContent={'center'} alignItems={'center'} lg={4}>
                            <img src={'images/logo2.png'} alt="" height={70} width={70} />
                        </Grid>
                        <Grid item container lg={4} justifyContent={'center'} alignItems={'center'}>
                            <Typography  variant='h5' color={'#fff'}>
                            mail@example.com
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography marginY={4} variant='subtitle2' color={'#FFF'} textAlign={'center'}>Copyright © 2023 Personal Portfolio</Typography>
                </Wrapper>
            </Container>

        </div>
    )
}

export default Footer
