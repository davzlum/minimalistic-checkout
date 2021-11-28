/* eslint-disable max-len */
import React, { useState } from 'react';
import CountriesDropdown from '../CountriesDropdown';

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
                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M16.0086 1.56735H1.54983C0.873914 1.56735 0.0804443 2.34613 0.0804443 3.03674V14.0571C0.0804443 14.7478 0.873914 15.5265 1.54983 15.5265H19.9172C20.5931 15.5265 21.3866 14.7478 21.3866 14.0571V8.5249C20.7676 9.08165 20.0033 9.4511 19.1825 9.59021V9.64899C19.1825 10.1339 18.918 10.3837 18.4478 10.3837H2.28453C1.81432 10.3837 1.54983 10.1339 1.54983 9.64899V8.91429C1.54983 8.42939 1.81432 8.1796 2.28453 8.1796H15.1637C14.7396 7.7096 14.4221 7.1535 14.2329 6.54938C14.0437 5.94525 13.9873 5.30738 14.0675 4.67942C14.1477 4.05147 14.3627 3.44827 14.6978 2.91114C15.0328 2.374 15.4799 1.91561 16.0086 1.56735V1.56735Z" fill="#697386" />
                  <path d="M14.2894 3.77142H0.0804443V5.9755H14.0984C13.975 5.23647 14.0407 4.47821 14.2894 3.77142V3.77142Z" fill="#697386" />
                  <path d="M18.8929 10.2857C17.5321 10.2857 16.2271 9.74388 15.2649 8.77941C14.3028 7.81493 13.7622 6.50683 13.7622 5.14286C13.7622 3.77889 14.3028 2.47078 15.2649 1.50631C16.2271 0.541835 17.5321 0 18.8929 0C20.2536 0 21.5586 0.541835 22.5208 1.50631C23.483 2.47078 24.0235 3.77889 24.0235 5.14286C24.0235 6.50683 23.483 7.81493 22.5208 8.77941C21.5586 9.74388 20.2536 10.2857 18.8929 10.2857ZM16.8553 3.01224H16.2762L14.8616 3.73224V4.46694L15.9831 3.87918V7.27347H16.8626V3.01224H16.8553ZM18.5411 3.6C18.9588 3.6 19.252 3.8351 19.252 4.17306C19.252 4.54041 18.9075 4.79755 18.4091 4.79755H18.1892V5.42204H18.4531C18.9808 5.42204 19.34 5.68653 19.34 6.06857C19.34 6.43592 18.9882 6.68571 18.4898 6.68571C18.1233 6.68571 17.7568 6.56816 17.3757 6.34041V7.0751C17.7861 7.25143 18.1966 7.34694 18.5997 7.34694C19.5599 7.34694 20.2195 6.85469 20.2195 6.14204C20.2195 5.64245 19.9117 5.23837 19.3986 5.07673C19.8384 4.9298 20.1242 4.54041 20.1242 4.09959C20.1242 3.40898 19.5159 2.93878 18.6363 2.93878C18.2399 2.94318 17.8484 3.02816 17.4856 3.18857V3.90857C17.8374 3.7102 18.1966 3.6 18.5411 3.6ZM21.7074 5.20163C22.2425 5.20163 22.6163 5.51755 22.6163 5.92898C22.6163 6.36245 22.2425 6.66367 21.7074 6.66367C21.3849 6.66367 21.0478 6.56082 20.7033 6.34776V7.10449C21.0624 7.26612 21.4289 7.34694 21.788 7.34694C21.9786 7.34694 22.1545 7.31755 22.3231 7.27347C22.7042 6.64898 22.9241 5.92898 22.9241 5.15755L22.9095 4.84898C22.6369 4.68729 22.3245 4.60581 22.0079 4.61388C21.876 4.61388 21.7367 4.62122 21.5901 4.64327V3.68816H22.6456C22.5541 3.453 22.4412 3.22675 22.3084 3.01224H20.8279V5.32653C21.1211 5.25306 21.4142 5.20163 21.7074 5.20163Z" fill="#697386" />
                </svg>
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
