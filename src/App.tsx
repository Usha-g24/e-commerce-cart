import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ProductListing } from './pages/ProductListing';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<ProductListing />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;