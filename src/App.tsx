import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Index from './pages/Index';

function App() {
  return (
    <>
     {/* <Index></Index> */}
     {/* <Home></Home> */}
     {/* <About></About> */}
     <Contact></Contact>
    </>
  );
}

export default App;
