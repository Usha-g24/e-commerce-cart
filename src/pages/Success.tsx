import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4 text-center">
      <CheckCircle size={64} className="text-green-500" />
      <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
      <p className="text-gray-600">Thank you for your purchase. You will be redirected shortly.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};