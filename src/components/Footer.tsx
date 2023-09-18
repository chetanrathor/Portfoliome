import React from 'react'
import Container from './Container'
import { Grid, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Wrapper from './Wrapper';
import { theme } from '../theme';
import { utils } from '../static';
import { Link } from 'react-router-dom';
import { IconType } from '../constants/common.constants';
import { keyGenerator } from '../utils';
const Footer = () => {
    const getIcon = (identifier: IconType) => {

        const sx = { color: theme.palette.secondary.main, cursor: 'pointer' }
        switch (identifier) {
            case IconType.Facebook:
                return (<FacebookIcon sx={sx} />)
            case IconType.GitHub:
                return (<GitHubIcon sx={sx} />)
            case IconType.LinkedIn:
                return (<LinkedInIcon sx={sx} />)
            case IconType.Instagram:
                return (<InstagramIcon sx={sx} />)
            default:
                return (<InstagramIcon sx={sx} />)

        }
    }

    return (
        <div>
            <Container paddingY={5} shouldVisibleBackgroundImage={false} backgroundColor={theme.palette.secondary.main}>
                <Wrapper>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item container gap={4} lg={4} sx={{ justifyContent: 'center' }} >

                            {
                                utils.iconRedirectionPath.map((item) => {
                                    return (
                                        <Link key={keyGenerator()} to={item.link} target='_blank'> {getIcon(item.identifier)}</Link>

                                    )
                                })
                            }


                        </Grid>
                        <Grid item container justifyContent={'center'} alignItems={'center'} lg={4}>
                            <img src={'images/logo2.png'} alt="" height={70} width={70} />
                        </Grid>
                        <Grid item container lg={4} justifyContent={'center'} alignItems={'center'}>
                            <Link to={`mailto://${utils.email}`} style={{textDecoration:'none'}}>

                                <Typography variant='h5' color={'#fff'}>
                                    {utils.email}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography marginY={4} variant='subtitle2' color={'#FFF'} textAlign={'center'}>Copyright © 2023 Personal Portfolio</Typography>
                </Wrapper>
            </Container>

        </div>
    )
}

export default Footer
