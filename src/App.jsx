
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Plants</button>
          <button onClick={() => setPage('about')}>About Us</button>
          <button onClick={() => setPage('cart')}>Cart</button>
        </div>
      </nav>

      {page === 'home' && (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Bring nature home. Discover beautiful plants for every space.</p>
          <button onClick={() => setPage('products')}>
            Get Started
          </button>
        </div>
      )}

      {page === 'products' && <ProductList />}
      {page === 'cart' && <CartItem />}
      {page === 'about' && <AboutUs />}
    </div>
  );
}

export default App;
