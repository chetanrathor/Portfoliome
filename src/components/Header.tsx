import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Box, Grid, Slide, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../theme'
import ButtonComponent from './ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '../store/store'
import { toggleVisiblity } from '../store/navbarSlice'
const Header = () => {
  const navbarState = useSelector((state: Rootstate) => state.navbar.isVisible)
  const dispatch = useDispatch()
  const handelToggle = (value: boolean) => {
    dispatch(toggleVisiblity({ isVisible: value }))
  }

  const routerLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Portfolio',
      path: '/portfolio'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  const handelLinkClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
    handelToggle(false)
  }

  return (

    <Box component={'div'} sx={{ backgroundColor: '#FEFAFA', marginBottom: 2 }}  >
      <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent={'space-between'} paddingY={3} maxWidth={'lg'} margin={'auto'}>
        <Grid item container={true} alignItems={'center'} justifyContent={'space-between'} paddingX={2} md={2}>
          <img src={'images/logo.png'} alt="" height={70} width={70} />
          <Box component={'div'} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box component={'div'} onClick={() => { handelToggle(true) }} sx={{ display: (navbarState ? 'none' : 'block') }}>
              <MenuRoundedIcon fontSize='large' color={'primary'}></MenuRoundedIcon>

            </Box>
            <Box component={'div'} onClick={() => { handelToggle(false) }} sx={{ display: (navbarState ? 'block' : 'none') }}>
              <CloseRoundedIcon fontSize='large' color={'primary'} ></CloseRoundedIcon>

            </Box>
          </Box>
        </Grid>

        <Grid item sx={{ display: { xs: (navbarState ? 'flex' : 'none'), md: 'flex' }, flexDirection: { xs: 'column', md: 'row' } }} container gap={4} alignItems={'center'} md={4}>

          <>
            {
              routerLinks.map((item) => {
                return (<>
                  <Link style={{textDecoration:'none'}} to={item.path} onClick={() => {
                    handelLinkClick()

                  }}>
                    <Typography variant='subtitle1' color={theme.palette.secondary.main}>
                      {item.name}
                    </Typography>
                  </Link>
                </>)
              })
            }



          </>


        </Grid>

        <Grid display={{ xs: 'none', md: 'block' }} item container flexDirection={'row'} alignItems={'center'} justifyContent={'end'} md={2}>
          <Box component={'div'} display={'flex'} justifyContent={'end'}>
            <ButtonComponent handelClick={() => { }} > <Typography variant='button'>Hire Me</Typography> </ButtonComponent>
          </Box>
        </Grid>
      </Grid>
    </Box>


  )
}

export default Header