import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
