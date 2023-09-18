import React from 'react'
import Header from '../components/Header'
import PageHeading from '../components/PageHeading'
import Container from '../components/Container'
import { Box, Grid, Typography } from '@mui/material'
import { textAlign, theme } from '../theme'
import Wrapper from '../components/Wrapper'
import Seprator from '../components/Seprator'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import ProgressBar from '../components/ProgressBar'
import ButtonComponent from '../components/ButtonComponent'
import ClientReview from '../components/ClientReview'
import SectionHeading from '../components/SectionHeading'
import Input from '../components/Input'
import Footer from '../components/Footer'
import { aboutUsPage } from '../static'
const About = () => {
  return (
    <div>
      <Header></Header>
      <PageHeading heading='About Us'></PageHeading>
      <Box component={'div'} sx={{ padding: { xs: 2, md: 0 } }}>
        <Container shouldVisibleBackgroundImage>
          <Wrapper>
            <Grid container justifyContent={'center'} marginY={10}>
              <Grid lg={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box component={'div'} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: '10px', width: '330px', height: '440px' }}>
                  <img height={'420px'} width={'330px'} style={{ position: 'relative', top: '10px', right: '10px' }} src="images/cart.png" alt="" />
                </Box>
              </Grid>
              <Grid item lg={4} >
                <SectionHeading heading={aboutUsPage.sectionA.firstHalf.heading} subtitle=''></SectionHeading>

                <Typography sx={{ textAlign: textAlign, marginY: { xs: 2, md: 0 } }} variant='subtitle1' color={'#35373A'}>
                  {aboutUsPage.sectionA.firstHalf.subHeading}
                </Typography>
                <Typography sx={{ textAlign: textAlign }} marginY={2} variant='subtitle1' color={'#35373A'}>
                  {aboutUsPage.sectionA.firstHalf.para1}
                </Typography>

                <Typography sx={{ textAlign: textAlign }} marginY={2} variant='subtitle1' color={'#35373A'}>
                  {aboutUsPage.sectionA.firstHalf.emailLabel}
                </Typography>
                <Typography sx={{ textAlign: textAlign }} marginY={2} variant='h5' color={'#002D5B'}>
                  {aboutUsPage.sectionA.firstHalf.email}
                </Typography>

              </Grid>
              <Grid item lg={4} paddingY={4}>
                <Typography sx={{ textAlign: textAlign }} variant='h4' color={'#002D5B'}>
                  {aboutUsPage.sectionA.secondfHalf.title}
                </Typography>
                <Box component={'div'} sx={{ width: { md: '49px' } }} marginY={2}><Seprator width='49px' ></Seprator></Box>
                <Typography sx={{ textAlign: textAlign }} variant='subtitle1' marginY={2} color={'#35373A'}>
                  {aboutUsPage.sectionA.secondfHalf.heading}
                </Typography>
                <Typography variant='subtitle1' sx={{ textAlign: textAlign }} marginY={2} color={'#35373A'}>
                  {aboutUsPage.sectionA.secondfHalf.para1}

                </Typography>
                <Grid container gap={5} marginY={5} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
                  <LinkedInIcon sx={{ color: theme.palette.secondary.main }} />
                  <InstagramIcon sx={{ color: theme.palette.secondary.main }}></InstagramIcon>
                  <FacebookIcon sx={{ color: theme.palette.secondary.main }}></FacebookIcon>
                  <GitHubIcon sx={{ color: theme.palette.secondary.main }}></GitHubIcon>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6}>
                <Typography variant='h4' sx={{ textAlign }} color={theme.palette.secondary.main}>
                  Frontend and Backend Developer
                </Typography>
                <Box component={'div'} sx={{ width: { md: '82px' } }} marginY={2}>
                  <Seprator width='82px'></Seprator>
                </Box>
                <Typography sx={{ textAlign }} variant='subtitle1' color={'#35373A'}>
                  {aboutUsPage.sectionB.subTitle}

                </Typography>
                <Box component={'div'} sx={{ marginX: { xs: '25%', md: '0' }, marginY: 2 }}>

                  <ButtonComponent handelClick={() => { }}> <Typography variant='subtitle2' color={'#fff'}>Download CV</Typography></ButtonComponent>
                </Box>
              </Grid>
              <Grid item container sx={{ marginY: 2 }} direction={'column'} justifyContent={'space-between'} lg={6} paddingY={1} paddingX={4}>

                <ProgressBar percent={60}></ProgressBar>
                <ProgressBar percent={40}></ProgressBar>
                <ProgressBar percent={80}></ProgressBar>
                <ProgressBar percent={50}></ProgressBar>
              </Grid>
            </Grid>
          </Wrapper>
        </Container>

        {/* <Container shouldVisibleBackgroundImage>
          <Wrapper>
            <Grid container direction={'column'}>
              <SectionHeading heading='What My Clients Says' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></SectionHeading>
              <Grid container gap={5} paddingX={2}>
                <Grid item>
                  <ClientReview maxWidth='100%' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                  ullamcorper mattis, pulvinar
                  dapibus leo.'></ClientReview>
                </Grid>
                <Grid item >
                  <ClientReview  maxWidth='100%' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
                <Grid item >
                  <ClientReview maxWidth='100%' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
              </Grid>
              <Grid container gap={5} paddingY={4} direction={'row'}>
                <Grid item >
                  <ClientReview  maxWidth='100%' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
                <Grid item >
                  <ClientReview maxWidth='100%' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>

                <Grid item lg={6} paddingX={2}>

                </Grid>
              </Grid>
            </Grid>
          </Wrapper>
        </Container> */}
        <Container shouldVisibleBackgroundImage>

          <Grid container justifyContent={'center'}>
            <Grid item container justifyContent={'center'} lg={6} marginBottom={2}>
              <SectionHeading heading='Stay In Touch' subtitle={aboutUsPage.sectionC.subHeading}></SectionHeading>
              <Box component={'div'} width={'100%'} marginY={3}>
                <Input></Input>
              </Box>
              <ButtonComponent handelClick={() => { }}>
                <Typography variant='subtitle2'> Subscribe</Typography>
              </ButtonComponent>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Footer></Footer>


    </div>
  )
}

export default About
