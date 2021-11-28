import React from 'react';
import Footer from '../Footer';
import GoBackButton from '../GoBackButton';
import './style.scss';

const ProductScreen = function () {
  return (
    <div className="product-screen">
      <GoBackButton />
      <div className="info-text">
        <div className="product-description">
          <div>New Mac</div>
          <div className="price">$ 899.00</div>
        </div>
        <img className="product-img" src="https://i.ibb.co/9YxksKN/image-6.png" alt="product" />
      </div>
      <Footer />
    </div>
  );
};

export default ProductScreen;
