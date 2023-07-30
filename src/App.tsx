import { ThemeProvider } from '@mui/material';
import './App.css';
import Index from './pages/Index';
import { theme } from './theme';
import { Provider } from 'react-redux'
import store from './store/store';
function App() {
  return (
    <>
      <Provider store={store} >


        <ThemeProvider theme={theme}>

          <Index></Index>
        </ThemeProvider>
      </Provider  >
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      <>

      </>
    </>
  );
}

export default App;
