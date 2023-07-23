import { Box, Button, Grid, Slide, Typography } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../theme'
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handelToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <Box sx={{ backgroundColor: '#FEFAFA', marginBottom: 2 }}  top={0} left={0} right={0} zIndex={1} height={'100px'}>
        <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent={'space-between'} maxWidth={'lg'} margin={'auto'}>
          <Grid item container={true} alignItems={'center'} justifyContent={'space-between'} paddingX={2} md={2}>
            <img src={'images/logo.png'} alt="" height={70} width={70} />
            <Box onClick={handelToggle} sx={{ display: (toggle ? 'none' : 'block') }}>
              <MenuRoundedIcon fontSize='large' color={'primary'}></MenuRoundedIcon>

            </Box>
            <Box onClick={handelToggle} sx={{ display: (toggle ? 'block' : 'none') }}>
              <CloseRoundedIcon fontSize='large' color={'primary'} ></CloseRoundedIcon>

            </Box>
          </Grid>
          <Slide in={toggle} timeout={1500} direction='down'>
            <Grid item sx={{ height: (toggle ? '250px' : '0'), flexDirection: { xs: 'column', md: 'row' } }} container gap={4} alignItems={'center'} md={4}>

              <Link to={'/'}>
                <Typography variant='subtitle1' color={theme.palette.secondary.main}>
                  Home
                </Typography>
              </Link>
              <Link to={'/about'}>
                <Typography variant='subtitle1' color={theme.palette.secondary.main}>
                  About
                </Typography>
              </Link>
              <Link to={'/portfolio'}>
                <Typography variant='subtitle1' color={theme.palette.secondary.main}>
                  Portfolio
                </Typography>
              </Link>
              <Link to={'/contact'}>
                <Typography variant='subtitle1' color={theme.palette.secondary.main}>
                  Contact
                </Typography>
              </Link>


            </Grid>
          </Slide>

          <Grid display={('none')} item container flexDirection={'row'} alignItems={'center'} justifyContent={'end'} md={2}>
            <Box >
              <ButtonComponent > <Typography variant='subtitle1'>Hire Me</Typography> </ButtonComponent>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Header
