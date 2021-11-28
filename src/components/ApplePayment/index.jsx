import React from 'react';
import applePayIcon from '../../assets/applePay.svg';

const ApplePayment = function () {
  return (
    <div className="option-1">
      <button className="apple-pay" type="button">
        <img src={applePayIcon} alt="applePay" />
      </button>
      <div className="divider">
        <hr />
        <p className="divider-text">Or pay with card</p>
      </div>
    </div>
  );
};

export default ApplePayment;
