import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext } from './components/CartContext';
import { useState } from 'react';
import Cart from './components/Cart';


const App = () => {
  
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const enCarrito = (id) => {
    return cart.some((item) => item.id === id)
  }
  
  return (
    <CartContext.Provider value={ { cart, addToCart, enCarrito} }>
      <BrowserRouter>

        <NavBar sticky="top"/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>    
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
