
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500'
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500'
  },
  {
    id: 3,
    name: 'Monstera',
    category: 'Indoor Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500'
  },
  {
    id: 4,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500'
  },
  {
    id: 5,
    name: 'Areca Palm',
    category: 'Indoor Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1597055181300-a8b7be4e8f8b?w=500'
  },
  {
    id: 6,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 249,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-page">
      <h1>Our Beautiful Plants</h1>
      <p>Bring nature home with Paradise Nursery.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <h3>₹{product.price}</h3>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
