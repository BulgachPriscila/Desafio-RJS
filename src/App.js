import './App.css';
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.svg';
import './sprout.png';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <div>
    <NavBar sticky="top"/>
    <ItemListContainer/>
  </div>
  );
}

export default App;
