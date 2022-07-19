import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item';
import CartWidget from './components/CartWidget'; 


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer />
{/*     <ItemDetailContainer/> */}
    </>
  );
}

export default App;
