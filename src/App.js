import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item';
import CartWidget from './components/CartWidget';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';



function App() {
  return (
    <>
      <div className='app'>
        <div className='pageContainer'>
          <div className='contentWrapper'>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route index element={<ItemListContainer />} />
                <Route path='/category/:name' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route
                  path="*"
                  element={
                    <div style={{ backgroundColor: "red" }}>
                      {" "}
                      ERROR 404 NOT FOUND
                    </div>
                  }
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
