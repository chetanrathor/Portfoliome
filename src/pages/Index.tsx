import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Rootstate } from '../store/store'
import { ThemeMode } from '../store/themeSlice'
import { darkTheme, theme } from '../theme'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'

const Index = () => {
    const state = useSelector((state: Rootstate) => state.themeType.mode)
    console.log('state', state)

    const getTheme = () => {
        if (state === ThemeMode.LIGHT) {
            console.log('state', state)

            return theme.palette.mode = 'dark'
        }
        console.log('state', state)

        return theme.palette.mode = 'light'
    }


    console.log(getTheme())


    return (
        <ThemeProvider theme={theme}>
            <div>

                <Routes  >

                    <Route element={<Home></Home>} path='/'></Route>
                    <Route element={<About></About>} path='/about'></Route>
                    <Route element={<Contact></Contact>} path='/contact'></Route>
                    <Route element={<Portfolio></Portfolio>} path='/portfolio'></Route>
                </Routes>
            </div>
        </ThemeProvider>
    )
}

export default Index
