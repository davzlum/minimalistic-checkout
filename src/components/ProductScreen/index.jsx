import React from 'react';
import CountriesDropdown from '../CountriesDropdown';
import GoBackButton from '../GoBackButton';

const ProductScreen = function () {
  return (
    <>
      <GoBackButton />
      <div>New Mac</div>
      <div>$ 899.00</div>
      <img src="https://i.ibb.co/9YxksKN/image-6.png" alt="product" />
      <CountriesDropdown />
    </>
  );
};

export default ProductScreen;
