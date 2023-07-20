import React from 'react'
import { TextareaAutosize } from '@mui/base';
import Header from '../components/Header'
import PageHeading from '../components/PageHeading'
import Container from '../components/Container'
import Wrapper from '../components/Wrapper'
import { Box, Grid, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'
import Seprator from '../components/Seprator'
import Input from '../components/Input'
import ButtonComponent from '../components/ButtonComponent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from '../components/Footer';
const contactUsInfo = [
  {
    icon: 'phone.png',
    heading: '+1 2222 54748 7',
    subHeading: 'Monday - Friday from 7am - 5pm'
  },
  {
    icon: 'home.png',
    heading: 'London, United Kingdom',
    subHeading: 'Rosemaed, UK 91117'
  },
  {
    icon: 'email.png',
    heading: 'contact@domain.com',
    subHeading: 'Contact me every time!'
  }
]


const Contact = () => (
  <div>
    <Header></Header>
    <PageHeading heading='Contact'></PageHeading>
    <Container shouldVisibleBackgroundImage paddingY={20}>
      <Wrapper>
        <Grid container justifyContent={'space-between'} >
          {contactUsInfo.map((item) => {

            return (
              <Grid item width={'329.98px'}>
                <Grid container direction={'column'} paddingY={4} paddingX={2} alignItems={'center'} boxShadow={'0px 0px 45px 0px #F0EBEB'}>
                  <img height={'35px'} width={'22px'} src={`${process.env.PUBLIC_URL}/images/${item.icon}`}></img>
                  <Typography variant='h6' color={'#002D5B'}>
                    {item.heading}
                  </Typography>
                  <Typography variant='subtitle1' color={'#35373A'}>
                    {item.subHeading}
                  </Typography>
                </Grid>
              </Grid>
            )
          })}
          {/* <Grid item lg={3}></Grid>
        <Grid item lg={3}></Grid> */}
        </Grid>

        <Grid container>
          <Grid item lg={8}>
            <Grid container direction={'column'} padding={5} gap={4}>
              <SectionHeading alignItems='start' heading='Get In Touch' subtitle=''></SectionHeading>
              <Input></Input>
              <Input></Input>
              <Box>

                <TextareaAutosize style={{ background: '#FAFAFA', borderRadius: '2px' }} minRows={12} cols={90} ></TextareaAutosize>
                <Typography variant='body1' color={'#35373A'}>
                  0 of 1 max characters.
                </Typography>
              </Box>
              <Box>
                <ButtonComponent>
                  <Typography variant='subtitle1' color={'#fff'}>Send Message</Typography>
                </ButtonComponent>
              </Box>

            </Grid>
          </Grid>
          <Grid item lg={4} paddingX={10} paddingY={5}>
            <SectionHeading heading='Message Me' subtitle='' alignItems='start'></SectionHeading>
            <Box marginY={2}>

              <Typography variant='subtitle1' color={'#35373A'}>
                Lorem ipsum dolor
                sit amet,
                consectetur
                adipiscing elit. Ut
                elit tellus, luctus nec
                ullamcor mattis,
                pulvinar dapibus
                leo.
              </Typography>
              <Grid container marginY={10} justifyContent={'space-between'}>
                <LinkedInIcon sx={{ color: '#002D5B' }}></LinkedInIcon>
                <InstagramIcon sx={{ color: '#002D5B' }}></InstagramIcon>
                <GitHubIcon sx={{ color: '#002D5B' }}></GitHubIcon>
                <FacebookIcon sx={{ color: '#002D5B' }}></FacebookIcon>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
    <Footer></Footer>
  </div>
)

export default Contact
