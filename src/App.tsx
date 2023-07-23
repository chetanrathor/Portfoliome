import { ThemeProvider } from '@mui/material';
import './App.css';
import Index from './pages/Index';
import { theme } from './theme';

function App() {
  return (
    <>
     
      <ThemeProvider theme={theme}>

        <Index></Index>
      </ThemeProvider>
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      <>
      
      </>
    </>
  );
}

export default App;
