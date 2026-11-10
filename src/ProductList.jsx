
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  // Air Purifying Plants
  { id: 1, name: 'Snake Plant', category: 'Air Purifying Plants', price: 299, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
  { id: 2, name: 'Peace Lily', category: 'Air Purifying Plants', price: 399, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
  { id: 3, name: 'Spider Plant', category: 'Air Purifying Plants', price: 249, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500' },
  { id: 4, name: 'Areca Palm', category: 'Air Purifying Plants', price: 599, image: 'https://images.unsplash.com/photo-1597055181300-a8b7be4e8f8b?w=500' },
  { id: 5, name: 'Boston Fern', category: 'Air Purifying Plants', price: 349, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
  { id: 6, name: 'Rubber Plant', category: 'Air Purifying Plants', price: 499, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },

  // Indoor Plants
  { id: 7, name: 'Monstera', category: 'Indoor Plants', price: 499, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500' },
  { id: 8, name: 'Pothos', category: 'Indoor Plants', price: 299, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
  { id: 9, name: 'ZZ Plant', category: 'Indoor Plants', price: 399, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
  { id: 10, name: 'Fiddle Leaf Fig', category: 'Indoor Plants', price: 699, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
  { id: 11, name: 'Calathea', category: 'Indoor Plants', price: 449, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
  { id: 12, name: 'Dracaena', category: 'Indoor Plants', price: 549, image: 'https://images.unsplash.com/photo-1597055181300-a8b7be4e8f8b?w=500' },

  // Succulents
  { id: 13, name: 'Aloe Vera', category: 'Succulents', price: 199, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
  { id: 14, name: 'Jade Plant', category: 'Succulents', price: 249, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
  { id: 15, name: 'Echeveria', category: 'Succulents', price: 199, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500' },
  { id: 16, name: 'Haworthia', category: 'Succulents', price: 229, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
  { id: 17, name: 'String of Pearls', category: 'Succulents', price: 299, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
  { id: 18, name: 'Sedum', category: 'Succulents', price: 179, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500' }
];

function ProductList({ onHome, onAbout, onCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(products.map((product) => product.category))];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <button onClick={onHome}>Home</button>
          <button onClick={onAbout}>About Us</button>
          <button onClick={onCart}>
            🛒 Cart ({cartQuantity})
          </button>
        </div>
      </nav>

      <h1>Our Beautiful Plants</h1>
      <p>Bring nature home with Paradise Nursery.</p>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>
            <p>Total Plants: {categoryProducts.length}</p>

            <div className="product-grid">
              {categoryProducts.map((product) => {
                const isAdded = cartItems.some(
                  (item) => item.id === product.id
                );

                return (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />

                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <h3>₹{product.price}</h3>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;
