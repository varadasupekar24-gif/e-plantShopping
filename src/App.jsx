
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [page, setPage] = useState('home');

  const handleContinueShopping = () => {
    setShowProductList(true);
    setPage('products');
  };

  const goHome = () => {
    setShowProductList(false);
    setPage('home');
  };

  const goAbout = () => {
    setShowProductList(false);
    setPage('about');
  };

  const goCart = () => {
    setShowProductList(false);
    setPage('cart');
  };

  return (
    <div className="app-container">

      {page !== 'products' && (
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <div>
            <button onClick={goHome}>Home</button>
            <button onClick={handleContinueShopping}>Plants</button>
            <button onClick={goAbout}>About Us</button>
            <button onClick={goCart}>Cart</button>
          </div>
        </nav>
      )}

      {!showProductList && page === 'home' && (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Bring nature home. Discover beautiful plants for every space.
          </p>
          <button onClick={handleContinueShopping}>
            Get Started
          </button>
        </div>
      )}

      {showProductList && page === 'products' && (
        <ProductList
          onHome={goHome}
          onAbout={goAbout}
          onCart={goCart}
        />
      )}

      {page === 'cart' && (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}

      {page === 'about' && <AboutUs />}

    </div>
  );
}

export default App;
