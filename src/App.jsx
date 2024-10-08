import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/cart/Cart.jsx';
import Checkout from './components/checkOut/CheckOut.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
              <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
              <Route path="/Cart" element ={<Cart/>}/>
              <Route path="/Checkout" element={<Checkout />} />
              <Route path='*' element={<h1>Atencion! vuelva al Inicio para seguir comprando!</h1>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;

