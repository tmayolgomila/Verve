// App.js
import React, { useState } from 'react';
import { Navbar } from './pages/navbar';
import { Home } from './pages/home/home';
import { Footer } from './pages/footer';
import Women from './pages/women';
import Men from './pages/men';
import Cart from './pages/cart';
import Caps from './pages/caps';
import Handbags from './pages/handbags';
import Gifts from './pages/gifts';
import Discover from './pages/discover';
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
            path="/men"
            element={<Men addToCart={addToCart} />}
          />
          <Route
            path="/caps"
            element={<Caps addToCart={addToCart} />}
          />
          <Route
            path="/handbags"
            element={<Handbags addToCart={addToCart} />}
          />
          <Route
            path="/gifts"
            element={<Gifts addToCart={addToCart} />}
          />
          <Route
            path="/discover"
            element={<Discover addToCart={addToCart} />}
          />
          <Route
            path="/shoppingCart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
