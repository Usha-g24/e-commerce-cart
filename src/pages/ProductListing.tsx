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
  },
  {
    id: '5',
    name: 'Designer Handbag',
    price: 149.99,
    description: 'Elegant leather handbag for everyday use',
    image:  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjWCfIqisL-VZnYHpxt6MjV32iXvCDED8-9JQY-QlCQy5oltggOm7EzmcYKDFa7W2WGqPhYfrx8uD99-KDdz_6fYknvhFtI9JpcFb2ByAuB8NgfPtzFL7lpg' 
  },
  {
    id: '6',
    name: 'Branded Tote Bag',
    price: 89.99,
    description: 'Spacious and stylish tote bag from a premium brand',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGIV_cVsIZn-UFABoiQ7Iu-pLVOolxWWIyeRbq7gihHRbxgKpzqyXmXidDSEaMBu1UdNq4goMuJySZt7CgO5Lw6jCe4NAzSnMCXmQ3arplosGhKFClQ7AgNQ'  // Tote Bag
  },
  {
    id: '7',
    name: 'Fashion Keychain Set',
    price: 19.99,
    description: 'Set of colorful and trendy keychains',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQP9NBhsFNNqxcXVFNTaxVKwGY6bCeD9vM6hEFsxQu2jjN9-erol37VJaLf97LMt4p7XCvQBhAvlgkPFY7iNT3Lkd04ITkypaZPkZxepOB4rpbyEO_3WFS1WA'  // Keychains
  },
  {
    id: '8',
    name: 'Leather Key Holder',
    price: 24.99,
    description: 'Compact and durable leather key holder',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqvBr3b3fJk8ledvCIAzAxr-TAVIuUmEzaOX4plzC4rCA4V-bsHu6e3qxBtQmFP6wca0AOp5Bpy1gHSnHYe2BB1-QKHcOa2l2GfsTJa89TqA30aHbr88Cybg'  // Key Holder
  },
  {
    id: '9',
    name: 'Classic Black Handbag',
    price: 129.99,
    description: 'A timeless black handbag that goes with every outfit',
    image: 'https://m.media-amazon.com/images/I/71YPDlZOM6L._SY625_.jpg'
  },
  {
    id: '10',
    name: 'Luxury Designer Handbag',
    price: 799.99,
    description: 'A luxury handbag with a sleek, elegant design from a top designer',
    image: 'https://m.media-amazon.com/images/I/713794mJmCL._SY625_.jpg'
  },
  {
    id: '11',
    name: 'Casual Tote Bag',
    price: 59.99,
    description: 'Comfortable and spacious tote bag for daily use',
    image: 'https://m.media-amazon.com/images/I/51xCKhxYUaL._SX625_.jpg'
  },
  {
    id: '12',
    name: 'Vintage Leather Handbag',
    price: 249.99,
    description: 'A vintage leather handbag with an antique design',
    image: 'https://m.media-amazon.com/images/I/61T8HU1uHkL._SY575_.jpg'
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