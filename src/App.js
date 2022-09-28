import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


const App = () => {

  
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar sticky="top"/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>    
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
