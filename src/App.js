import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import "@fontsource/open-sans"
import "@fontsource/source-sans-pro"
import theme from './theme';


function App() {
  return (
    <ChakraProvider theme={theme} >
    <div className="App">
      <Home/>
      <Articles/>
      <Footer/>
    </div>
    </ChakraProvider>
  );
}

export default App;
