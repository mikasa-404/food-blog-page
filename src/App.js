import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'; // Import your custom theme
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider  theme={theme}>
    <div className="App">
      <Home/>
      <Articles/>
      <Footer/>
    </div>
    </ChakraProvider>
  );
}

export default App;
