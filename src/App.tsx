import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Index from './pages/Index';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <>
      {/* <Routes>
      <Route element={(<Index></Index>)} path=''></Route>
       </Routes> */}
      <ThemeProvider theme={theme}>

        <Index></Index>
      </ThemeProvider>
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      <>
        fds
      </>
    </>
  );
}

export default App;
