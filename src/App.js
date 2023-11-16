// App.js
import React, { useState } from 'react';
import { Navbar } from './pages/navbar';
import { Home } from './pages/home/home';
import { Footer } from './pages/footer';
import Women from './pages/women';
import Cart from './pages/cart';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const basename = process.env.BASENAME || "";

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/women"
            element={<Women addToCart={addToCart} />}
          />
          <Route
            path="/shoppingCart"
            element={<Cart cartItems={cartItems} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
