import { Box, Grid, Slide, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import ClientReview from '../components/ClientReview'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Seprator from '../components/Seprator'
import SkillCart from '../components/SkillCart'
import Wrapper from '../components/Wrapper'
import { theme } from '../theme'

const Home = () => {

  const serviceProvides = [
    {
      meta: {
        imagePath: 'code.png',
        height: '68px',
        width: '68px'
      },
      data: {
        heading: 'UI/UX Design',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }
    },
    {
      meta: {
        imagePath: 'gear.png',
        height: '76px',
        width: '78px'
      },
      data: {
        heading: 'UI/UX Design',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }
    },
    {
      meta: {
        imagePath: 'crm.png',
        height: '68px',
        width: '68px'
      },
      data: {
        heading: 'UI/UX Design',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
      }
    }
  ]

  const [scrollYState, setScrollY] = useState({
    inOne: false
  })

  const handleScroll = () => {
    // Your logic for handling the scroll event goes here
    if (window.scrollY > 500) {
      setScrollY({ ...scrollYState, inOne: true })
    }
  };



  useEffect(() => {
    // Add event listener for the 'scroll' event on mount
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div>
      <Box sx={{ padding: { xs: 2, md: 0 } }}>
        <Box sx={{ backgroundColor: '#FEFAFA' }}>
          <Header></Header>
          <Box paddingTop={5}>

            <Hero></Hero>
          </Box>
        </Box>


        <Slide direction='up' in={scrollYState.inOne} timeout={1500}  >
          <Box>
            <Grid direction={'column'} gap={8} container maxWidth={'lg'} margin={'auto'} marginTop={12}>
              <SectionHeading heading='About Me' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></SectionHeading>

              <Grid container direction={'row'}>
                <Grid item container gap={2} direction={'column'} lg={4}>
                  <Grid gap={2}>
                    <Grid gap={2} container>
                      <Typography variant='h4' color={theme.palette.secondary.main} sx={{
                        textAlign: { xs: 'center', md: 'start' }
                      }}>
                        Developing With a Passion
                        While Exploring The World.
                      </Typography>
                      {/* <Typography borderBottom={'solid'} width={'56px'} height={'2px'} borderColor={theme.palette.primary.main}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography> */}
                      <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                        <Seprator width='56px'></Seprator>
                      </Box>
                    </Grid>
                  </Grid>


                  <Typography sx={{
                    maxWidth: { xs: '100%', md: '85%' },
                    textAlign: { xs: 'center', md: 'start' }
                  }} variant='subtitle1' color={theme.palette.success.main}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </Typography>
                  <Typography variant='subtitle1' color={theme.palette.success.main}
                    sx={{
                      maxWidth: { xs: '100%', md: '85%' },
                      textAlign: { xs: 'center', md: 'start' }
                    }}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                  <Box sx={{ margin: { xs: 'auto', md: '0' } }}>
                    <ButtonComponent> <Typography variant='subtitle1'>Contact Me</Typography></ButtonComponent>
                  </Box>
                </Grid>
                <Grid item container direction={'column'} gap={10} lg={4} sx={{ marginY: { xs: 2, md: 0 } }}>

                  <Typography sx={{
                    maxWidth: { xs: '100%', md: '85%' },
                    textAlign: { xs: 'center', md: 'start' }
                  }} variant='subtitle1' color={theme.palette.success.main}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </Typography>
                  <Typography sx={{
                    maxWidth: { xs: '100%', md: '85%' },
                    textAlign: { xs: 'center', md: 'start' }
                  }} variant='subtitle1' color={theme.palette.success.main}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                </Grid>
                <Grid lg={4} sx={{ display: { xs: 'none', md: 'block' } }} >
                  <Box sx={{ borderRadius: '10px', width: '330px', height: '440px' }}>
                    <img height={'420px'} width={'420px'} style={{ position: 'relative', top: '10px', right: '10px' }} src="images/meta_comp.png" alt="" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Slide>

        <Grid container direction={'column'} gap={6} sx={{ background: process.env.PUBLIC_URL + '/services_bg.png', backgroundColor: '#FEFAFA', paddingY: '100px' }} >

          <SectionHeading heading={`What Services I'm Providing`} subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></SectionHeading>

          <Grid container gap={6} justifyContent={'center'} padding={2}>

            {

              serviceProvides.map((item) => {
                return (<>

                  <Grid gap={3} container direction={'column'} alignItems={'center'} lg={3} sx={{ backgroundColor: theme.palette.warning.main, padding: '48px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: 2 }}>
                    <Grid item>

                      <img alt='' src={`${process.env.PUBLIC_URL}/images/${item.meta.imagePath}`} width={item.meta.width} height={item.meta.height}></img>
                    </Grid>
                    <Typography variant='h5' color={theme.palette.secondary.main}>{item.data.heading}</Typography>
                    <Typography maxWidth={'236px'} textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>Lorem ipsum dolor sit amet,
                      {item.data.subtitle}
                    </Typography>
                    <Grid item sx={{cursor:'pointer'}}>

                      <img alt='' src={process.env.PUBLIC_URL + 'images/arrow1.png'} width={'46px'} height={'46px'}></img>
                    </Grid>
                  </Grid>
                </>)
              })
            }





            {/* <Grid gap={3} container direction={'column'} alignItems={'center'} lg={3} sx={{ backgroundColor: theme.palette.warning.main, padding: '48px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: 2 }}>
              <Grid item>

                <img alt='' src={process.env.PUBLIC_URL + 'images/gear.png'} width={'78px'} height={'76px'}></img>
              </Grid>
              <Typography variant='h5' color={theme.palette.secondary.main}>UI/UX Design</Typography>
              <Typography maxWidth={'236px'} textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut
                elit tellus, luctus nec
                ullamcorper mattis, pulvinar
                dapibus leo.</Typography>
              <Grid item>

                <img alt='' src={process.env.PUBLIC_URL + 'images/arrow1.png'} width={'46px'} height={'46px'}></img>
              </Grid>
            </Grid>
            <Grid gap={3} container direction={'column'} alignItems={'center'} lg={3} sx={{ backgroundColor: theme.palette.warning.main, padding: '48px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: 2 }}>
              <Grid item>

                <img alt='' src={process.env.PUBLIC_URL + 'images/crm.png'} width={'68px'} height={'68px'}></img>
              </Grid>
              <Typography variant='h5' color={theme.palette.secondary.main}>UI/UX Design</Typography>
              <Typography maxWidth={'236px'} textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut
                elit tellus, luctus nec
                ullamcorper mattis, pulvinar
                dapibus leo.</Typography>
              <Grid item sx={{ cursor: 'pointer' }} >

                <img alt='' src={process.env.PUBLIC_URL + 'images/arrow1.png'} width={'46px'} height={'46px'}></img>
              </Grid>
            </Grid> */}


          </Grid>
        </Grid>

        <Grid sx={{ display: 'none' }}>
          <video autoPlay controls height={'600px'} width={'100%'}> <source src={process.env.PUBLIC_URL + 'images/process.mp4'} type="video/mp4"></source></video>
        </Grid>
        <Container shouldVisibleBackgroundImage>
          <Wrapper>
            <Grid direction={'column'} container gap={2}>
              <Grid item>

                <SectionHeading heading='Work Experience' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></SectionHeading>
              </Grid>

              <Grid container justifyContent={'center'} gap={4} padding={2}>
                <Grid item maxWidth={'520px'}>
                  <SkillCart title='UI/UX Designer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.' duration='2015-2018' linePercent={80}></SkillCart>
                </Grid>
                <Grid item maxWidth={'520px'}>
                  <SkillCart title='UI/UX Designer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.' duration='2015-2018' linePercent={80}></SkillCart>
                </Grid>
              </Grid>
              <Grid container justifyContent={'center'} gap={6} padding={2}>
                <Grid item maxWidth={'329px'}>
                  <SkillCart title='UI/UX Designer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.' duration='2015-2018' linePercent={80}></SkillCart>
                </Grid>
                <Grid item maxWidth={'329px'}>
                  <SkillCart title='UI/UX Designer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.' duration='2015-2018' linePercent={80}></SkillCart>
                </Grid>
                <Grid item maxWidth={'329px'}>
                  <SkillCart title='UI/UX Designer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.' duration='2015-2018' linePercent={80}></SkillCart>
                </Grid>
              </Grid>
            </Grid>
          </Wrapper>
        </Container>

        <Container shouldVisibleBackgroundImage>
          <Wrapper>
            <Grid container direction={'column'} marginY={2}>
              <SectionHeading heading='What My Clients Says' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></SectionHeading>
              <Grid container gap={5} justifyContent={'space-between'} padding={2}>
                <Grid item >
                  <ClientReview maxWidth='232px' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
                <Grid item >
                  <ClientReview maxWidth='232px' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
                <Grid item >
                  <ClientReview maxWidth='232px' clientImage='male.png' isPublicImage name='Jane Done' review='Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Ut
elit tellus, luctus nec
ullamcorper mattis, pulvinar
dapibus leo.'></ClientReview>
                </Grid>
              </Grid>
            </Grid>
          </Wrapper>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default Home
