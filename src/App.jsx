import React from 'react';
import PaymentScreen from './components/PaymentScreen';
import ProductScreen from './components/ProductScreen';

const App = function () {
  return (
    <div className="app-container">
      <ProductScreen />
      <PaymentScreen />
    </div>
  );
};

export default App;
