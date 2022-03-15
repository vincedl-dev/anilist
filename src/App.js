import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

import Table from './components/Table';
import { ProductProvider } from './context/Products';
import SampleProducts from './context/SampleProducts';
function App() {
  return (
   <ProductProvider >
     <SampleProducts />
   </ProductProvider>
  );
  
}

export default App;
