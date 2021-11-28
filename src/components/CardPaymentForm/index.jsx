/* eslint-disable max-len */
import React, { useState } from 'react';
import CountriesDropdown from '../CountriesDropdown';
import cvcIcon from '../../assets/cvcIcon.svg';

const CardPaymentForm = function () {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <div className="form-row">
          <label htmlFor="number">
            Card information
            <input
              type="text"
              inputMode="numeric"
              placeholder="1234 1234 1234 1234"
              name="number"
              id="number"
              maxLength="16"
              className="form-control top"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
            />
            <div className="card-icons">
              <img src="https://js.stripe.com/v3/fingerprinted/img/visa-365725566f9578a9589553aa9296d178.svg" alt="" />
              <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="" />
              <img src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="" />
              <img src="https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg" alt="" />
            </div>
          </label>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="expiry">
              <input
                type="text"
                inputMode="numeric"
                name="expiry"
                id="expiry"
                maxLength="4"
                className="form-control bottom-left"
                placeholder="MM / YY"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label htmlFor="cvc">
              <input
                type="text"
                inputMode="numeric"
                name="cvc"
                id="cvc"
                maxLength="4"
                className="form-control bottom-right"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
              <div className="icon">
                <img src={cvcIcon} alt="cvc" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name">
          Nombre
          <input
            type="text"
            name="name"
            id="name"
            maxLength="30"
            className="form-control"
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
        </label>
      </div>
      <CountriesDropdown />
      <button type="button" className="button-pay">Pay $899.00</button>
    </form>
  );
};

export default CardPaymentForm;
