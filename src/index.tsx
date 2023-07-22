import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (<App></App>),
    children:[
      {
        path:'',
        element:(<Home></Home>)
      },
      {
        path:'about',
        element:(<About></About>)
      },
      {
        path:'contact',
        element:(<Contact></Contact>)
      },
      {
        path:'portfolio',
        element:(<Portfolio></Portfolio>)
      }
    ]

  },

])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <RouterProvider router={routes} />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
