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
import { textAlign } from '../theme';
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
        <Grid paddingX={4} gap={3} container justifyContent={'space-between'}  sx={{flexDirection:{xs:'column',md:'row'}}}>
          {contactUsInfo.map((item,index) => {
            return (
              <Grid item width={'329.98px'} key={1}>
                <Grid container direction={'column'} paddingY={4} paddingX={2} alignItems={'center'} sx={{borderRadius:'10px'}} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}>
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
        </Grid>

        <Grid container sx={{flexDirection:{xs:'column',md:'row'}}}>
          <Grid item lg={8}>
            <Grid container direction={'column'} padding={5} gap={4}>
              <SectionHeading  heading='Get In Touch' subtitle=''></SectionHeading>
              <Input></Input>
              <Input></Input>
              <Box>

                {/* <TextareaAutosize style={{ background: '#FAFAFA', borderRadius: '2px' }} minRows={12} cols={90} ></TextareaAutosize> */}
                <Typography sx={{textAlign:textAlign}} variant='body1' color={'#35373A'}>
                  0 of 1 max characters.
                </Typography>
              </Box>
              <Box sx={{margin:{xs:'auto',md:'0'}}}>
                <ButtonComponent>
                  <Typography variant='subtitle1' color={'#fff'}>Send Message</Typography>
                </ButtonComponent>
              </Box>

            </Grid>
          </Grid>
          <Grid item lg={4} paddingX={{xs:0,md:10}} paddingY={5}>
            <SectionHeading heading='Message Me' subtitle='' ></SectionHeading>
            <Box marginY={2}>

              <Typography variant='subtitle1' color={'#35373A'} sx={{textAlign}}>
                Lorem ipsum dolor
                sit amet,
                consectetur
                adipiscing elit. Ut
                elit tellus, luctus nec
                ullamcor mattis,
                pulvinar dapibus
                leo.
              </Typography>
              <Grid container marginY={10} gap={5} justifyContent={'center'}>
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
