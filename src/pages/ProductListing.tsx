import React from 'react';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import { Product } from '../types';

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 299.99,
    description: 'Advanced smartwatch with health tracking features',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80'
  },
  {
    id: '3',
    name: 'Ultra HD Camera',
    price: 599.99,
    description: 'Professional-grade digital camera with 4K recording',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80'
  },
  {
    id: '4',
    name: 'Gaming Console Pro',
    price: 499.99,
    description: 'Next-gen gaming console with 4K graphics',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&q=80'
  }
];

export const ProductListing: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ShoppingCart size={20} />
          <span>View Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};