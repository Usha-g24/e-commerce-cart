import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';
import { RootState } from '../store/store';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, isLoading } = useSelector((state: RootState) => state.cart);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <ShoppingCart size={64} className="text-gray-400" />
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-4">
          <CartSummary />
          
          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};