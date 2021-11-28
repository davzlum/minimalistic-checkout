import React from 'react';
import ApplePayment from '../ApplePayment';
import CardPaymentForm from '../CardPaymentForm';
import './style.scss';

const PaymentScreen = function () {
  return (
    <div className="payment-screen">
      <ApplePayment />
      <CardPaymentForm />
    </div>
  );
};

export default PaymentScreen;
