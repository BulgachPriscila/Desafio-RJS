import './App.css';
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <div>
    <NavBar sticky="top"/>
    <ItemListContainer botonAdd="Añadir al carrito"/>
  </div>
  );
}

export default App;
