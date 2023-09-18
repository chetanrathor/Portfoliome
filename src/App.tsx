import { ThemeProvider } from '@mui/material';
import './App.css';
import Index from './pages/Index';
import { theme } from './theme';
import { Provider, useSelector } from 'react-redux'
import store, { Rootstate } from './store/store';
function App() {

  return (
    <>
      <Provider store={store} >


        <Index></Index>

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
