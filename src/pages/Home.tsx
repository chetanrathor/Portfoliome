import { Box, Grid, Grow, Slide, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BackToTop from '../components/BackToTop';
import ButtonComponent from '../components/ButtonComponent';
import ClientReview from '../components/ClientReview';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Seprator from '../components/Seprator';
import SkillCart from '../components/SkillCart';
import Wrapper from '../components/Wrapper';
import { aboutMe, clientSays, servicesProvidingMe, workExperince } from '../static';
import { Rootstate } from '../store/store';
import { theme } from '../theme';
import { keyGenerator } from '../utils';

const Home = () => {
  // Redux state
  const navbarState = useSelector((state: Rootstate) => state.navbar.isVisible);

  // Service providers data
  const serviceProviders = servicesProvidingMe.services

  const handelScroll = (e: any) => {
    // console.log('window.scrollY', window.scrollY)
    console.log('e', e)
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';


    console.log('one', scrollDirection)
    // console.log('two', two)



  }

  useEffect(() => {

    window.addEventListener('scroll', handelScroll)
  }, []);



  const getElements = () => {

    return (

      <div>
        <Box onWheel={(e) => { handelScroll(e) }} component={'div'} sx={{ padding: { xs: 2, md: 0 }, marginTop: { xs: (navbarState ? 0 : 0) } }}>
          <Box component={'div'} sx={{ backgroundColor: theme.palette.background.default, paddingBottom: '70px' }}>
            <Header />
            <Box component={'div'} paddingTop={1}>
              <Hero />
            </Box>
          </Box>

          {/* About Me section */}
          {/* <Fade in timeout={1500}> */}
          <Grow in timeout={1500}>
            <Box component={'div'} paddingY={3} sx={{ backgroundColor: theme.palette.background.paper }}>
              <Grid direction={'column'} gap={8} container maxWidth={'lg'} margin={'auto'} marginTop={12}>
                <SectionHeading heading='About Me' subtitle={aboutMe.subTitle} />

                {/* Grid for the About Me content */}
                <Grid container direction={'row'} justifyContent={'space-between'}>
                  {/* Left side content */}
                  <Grid item container gap={2} direction={'column'} lg={4} >
                    <Grid gap={2}>
                      <Grid gap={2} container>
                        <Typography variant='h4' color={theme.palette.secondary.main} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                          {aboutMe.heading}
                        </Typography>
                        <Box component={'div'} display={'flex'} justifyContent={'center'} width={'100%'}>
                          <Seprator width='56px' />
                        </Box>
                      </Grid>
                    </Grid>
                    <Typography sx={{ maxWidth: { xs: '100%', md: '85%' }, textAlign: { xs: 'center', md: 'start' } }} variant='subtitle1' color={theme.palette.success.main}>
                      {aboutMe.leftSection.one}
                    </Typography>
                    <Typography variant='subtitle1' color={theme.palette.success.main} sx={{ maxWidth: { xs: '100%', md: '85%' }, textAlign: { xs: 'center', md: 'start' } }}>
                      {aboutMe.leftSection.two}
                    </Typography>
                    <Box component={'div'} sx={{ margin: { xs: 'auto', md: '0' } }}>
                      <ButtonComponent handelClick={() => { }}>
                        <Typography variant='button'>{aboutMe.buttonText}</Typography>
                      </ButtonComponent>
                    </Box>
                  </Grid>
                  {/* Middle content */}
                  <Grid item container direction={'column'} gap={10} lg={5} sx={{ marginY: { xs: 2, md: 0 } }}>
                    <Typography sx={{ maxWidth: { xs: '100%', md: '85%' }, textAlign: { xs: 'center', md: 'start' } }} variant='subtitle1' color={theme.palette.success.main}>
                      {aboutMe.rightSection.one}
                    </Typography>
                    <Typography sx={{ maxWidth: { xs: '100%', md: '85%' }, textAlign: { xs: 'center', md: 'start' } }} variant='subtitle1' color={theme.palette.success.main}>
                      {aboutMe.rightSection.two}
                    </Typography>
                  </Grid>
                  {/* Right side content */}
                  <Grid lg={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box component={'div'} sx={{ borderRadius: '10px', width: '330px', height: '440px' }}>
                      <img height={aboutMe.sectionHero.height} width={aboutMe.sectionHero.height} style={{ position: 'relative', top: '10px', right: '10px' }} src={`${process.env.PUBLIC_URL}/images/${aboutMe.sectionHero.path}`} alt="" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grow>
          {/* </Fade> */}

          {/* Service Providers section */}
          <Container shouldVisibleBackgroundImage={false} backgroundColor={theme.palette.background.paper} paddingY={15}>
            <Wrapper>
              {/* <Fade in timeout={1500}> */}
              <>
                <SectionHeading heading={`What Services I'm Providing`} subtitle={servicesProvidingMe.subTitle}></SectionHeading>
                <Grid container gap={6} justifyContent={'space-between'} padding={2} paddingY={5}>
                  {/* Service providers */}
                  {serviceProviders.map((item, index) => (
                    <Grid key={keyGenerator()} gap={3} container direction={'column'} alignItems={'center'} maxWidth={'329px'} sx={{ backgroundColor: theme.palette.warning.main, padding: '48px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: 2 }}>
                      <Grid item>
                        <img alt='' src={`${process.env.PUBLIC_URL}/images/${item.icon.path}`} width={item.icon.meta.width} height={item.icon.meta.height} />
                      </Grid>
                      <Typography variant='h5' color={theme.palette.secondary.main}>{item.title}</Typography>
                      <Typography maxWidth={'236px'} textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>
                        {item.description}
                      </Typography>
                      {/* <Grid item sx={{ cursor: 'pointer' }}>
                        <img alt='' src={process.env.PUBLIC_URL + 'images/arrow1.png'} width={'46px'} height={'46px'} />
                      </Grid> */}
                    </Grid>
                  ))}
                </Grid>
              </>

              {/* </Fade> */}
            </Wrapper>
          </Container>

          {/* Work Experience section */}
          <Container shouldVisibleBackgroundImage backgroundColor={theme.palette.background.paper}>
            <Wrapper>
              <Slide direction='up' in timeout={1500}>
                <Grid direction={'column'} paddingY={5} container gap={2}>
                  <Grid item>
                    <SectionHeading heading='Work Experience' subtitle={workExperince.subTitle} />
                  </Grid>
                  <Grid container justifyContent={'space-between'} gap={4} padding={2}>
                    {/* Skill carts */}
                    {
                      workExperince.experiences[0].map((item) => {
                        return (
                          <Grid item maxWidth={'520px'} key={keyGenerator()}>
                            <SkillCart title={item.title} description={item.subTitle} duration={item.year} linePercent={item.progress} />
                          </Grid>
                        )
                      })
                    }

                  </Grid>
                  <Grid container direction={'row'} gap={3} justifyContent={{ xs: 'center', md: 'space-between' }}>

                    {workExperince.experiences[1].map((item) => {
                      return (
                        <Grid item maxWidth={'329px'} key={keyGenerator()}>
                          <SkillCart title={item.title} description={item.subTitle} duration={item.year} linePercent={item.progress} />
                        </Grid>
                      )
                    })}




                  </Grid>
                </Grid>
              </Slide>
            </Wrapper>
          </Container>

          {/* What My Clients Say section */}
          <Container shouldVisibleBackgroundImage backgroundColor={theme.palette.background.paper}>
            <Wrapper>
              <Grid container direction={'column'} marginY={2} paddingY={8}>
                <SectionHeading heading={clientSays.heading} subtitle={clientSays.subTitle} />
                <Grid container gap={5} justifyContent={'space-between'} padding={2}>
                  {/* Client reviews */}
                  {
                    clientSays.clientReviews.map((item) => {
                      return (
                        <Grid item key={keyGenerator()}>
                          <ClientReview maxWidth='330px' clientImage={item.avatar} isPublicImage name={item.name} review={item.review} />
                        </Grid>
                      )
                    })
                  }

                </Grid>
              </Grid>
            </Wrapper>
          </Container>

          {/* Footer */}
        </Box>

        <Box component={'div'} display={'flex'} justifyContent={'end'} position={'relative'} bottom={20}>

          <BackToTop></BackToTop>
        </Box>


        <Footer />
      </div>


    );

  }

  return (<>
    {
      getElements()
    }
  </>
  )


};

export default Home;
