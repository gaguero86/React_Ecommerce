import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget'; 
import MapCard from './components/Map';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer />
    {/* <MapCard/> */}
    </>
  );
}

export default App;
