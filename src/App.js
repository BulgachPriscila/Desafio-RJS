import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Suculentas from './components/Suculentas';
import Cactus from './components/Cactus';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>

      <NavBar sticky="top"/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/suculentas' element={<Suculentas/>}/>
        <Route path='/cactus' element={<Cactus/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
