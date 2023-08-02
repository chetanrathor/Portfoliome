import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Grow, Slide, Typography } from '@mui/material';
import { theme } from '../theme';
import ButtonComponent from './ButtonComponent';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { lazy, Suspense, useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import { Model } from './Model';
import { hero, utils } from '../static';
import { Link, useNavigate } from 'react-router-dom';
const Hero = () => {

    const words = [
        hero.headingSecond,
    ];

    const [part, setPart] = useState('C');
    const [i, setI] = useState(0);
    const [offset, setOffset] = useState(1);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 70;

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    setSkipCount((prev) => prev + 1);
                    if (skipCount === skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                }
                console.log('forward', forwards)
            } else {
                console.log('offset', offset)
                if (offset === 1) {
                    setForwards(true);
                    setI((prev) => (prev + 1 >= words.length ? 0 : prev + 1));
                    console.log('i', i)
                }
            }

            const currentWord = words[i];
            const currentPart = currentWord.substr(0, offset);
            console.log('currentPart', currentPart)
            setPart(currentPart);

            if (skipCount === 0) {
                if (forwards) {
                    setOffset((prev) => prev + 1);
                } else {

                    setOffset((prev) => {
                        if (prev != 1) {
                            return prev - 1
                        }
                        return prev
                    });
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [i, offset, forwards, skipCount]);

    const navigate = useNavigate()

    const handelButtonClick = () => {
        navigate('/about')
    }





    return (

            <Box component={'div'}>
                <Grid container justifyContent={'center'} maxWidth={'lg'} margin={'auto'} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}     >
                    <Grid maxWidth={'57px'} justifyContent={'flex-start'} container gap={3} sx={{ flexDirection: { xs: 'row', md: 'column' }, justifyContent: { xs: 'start', md: 'start' }, marginY: { xs: 2, md: 0 } }} >
                        <Link to={utils.iconRedirectionPath.linkedin} target='_blank'> <LinkedInIcon sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }} /></Link>
                        <Link to={utils.iconRedirectionPath.instagram} target='_blank'><InstagramIcon sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}></InstagramIcon></Link>
                        <Link to={utils.iconRedirectionPath.facebook} target='_blank'><FacebookIcon sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}></FacebookIcon></Link>
                        <Link to={utils.iconRedirectionPath.github} target='_blank'><GitHubIcon sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}></GitHubIcon></Link>
                    </Grid>
                    <Grid maxWidth={'608px'} item container sx={{ flexDirection: { xs: 'column-reverse', md: 'column' }, justifyContent: { xs: 'start', md: 'start' } }}  >

                        <Grid justifyContent={'center'} container direction={'column'} gap={5}>
                            <Grid container direction={'column'} gap={2} >
                                <Typography variant='h1' color={theme.palette.secondary.main} >
                                    {hero.headingFirst}
                                    <br />
                                    {part}
                                </Typography>
                                <Typography variant='subtitle1' color={theme.palette.success.main}>
                                    {hero.subTitle}
                                </Typography>
                            </Grid>
                            <Box component={'div'}>

                                <ButtonComponent handelClick={handelButtonClick}><Typography variant='button' >{hero.buttonText}</Typography></ButtonComponent>
                            </Box>
                        </Grid>

                    </Grid>
                    <Grid maxWidth={'471px'} item container display={{ xs: 'none', md: 'flex' }} >

                        {/* <img src={process.env.PUBLIC_URL + '/images/hero.png'} style={{ maxWidth: '471px' }} width={'100%'} alt="" /> */}
                        <Canvas

                            camera={{ position: [8, 0, 12.25], fov: 7.5 }}
                            style={{
                                backgroundColor: 'inherit',
                                width: '100vw',
                                height: '70vh',

                            }}
                        >
                            <ambientLight intensity={2} />
                            <ambientLight intensity={1.5} />
                            <directionalLight intensity={0.4} />
                            <Suspense fallback={null}>
                                <Model position={[0.025, -0.9, 0.1]} ></Model>
                            </Suspense>
                            <OrbitControls />
                        </Canvas>

                    </Grid>
                </Grid>
            </Box>


    )
}

export default Hero