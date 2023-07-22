import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'
const Header = () => (
  <div>
    <Box sx={{ backgroundColor: '#FEFAFA' }}>
      <Grid container justifyContent={'space-between'} maxWidth={'lg'} margin={'auto'}>
        <Grid item md={2}>
          <img src={'images/logo.png'} alt="" height={70} width={70} />
        </Grid>
        <Grid item container gap={4} alignItems={'center'} md={4}>

          <Link to={'/'}>
            <Typography variant='subtitle1' color={theme.palette.secondary.main}>
              Home
            </Typography>
          </Link>
          <Link to={'/about'}>
            <Typography variant='subtitle1' color={theme.palette.secondary.main}>
              Home
            </Typography>
          </Link>
          <Link to={'/portfolio'}>
            <Typography variant='subtitle1' color={theme.palette.secondary.main}>
              Home
            </Typography>
          </Link>
          <Link to={'/contact'}>
            <Typography variant='subtitle1' color={theme.palette.secondary.main}>
              Home
            </Typography>
          </Link>


        </Grid>
        <Grid item container flexDirection={'row'} alignItems={'center'} justifyContent={'end'} md={2}>
          <Box>
            <ButtonComponent > <Typography variant='subtitle1'>Hire Me</Typography> </ButtonComponent>
          </Box>
        </Grid>
      </Grid>
    </Box>

  </div>
)

export default Header
