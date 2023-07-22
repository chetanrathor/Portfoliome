import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'

const Index = () => {
    return (
        <div>
            <Routes  >
                <Route element={<Home></Home>} path='/'></Route>
                <Route element={<About></About>} path='/about'></Route>
                <Route element={<Contact></Contact>} path='/contact'></Route>
                <Route element={<Portfolio></Portfolio>} path='/portfolio'></Route>
            </Routes>
        </div>
    )
}

export default Index
