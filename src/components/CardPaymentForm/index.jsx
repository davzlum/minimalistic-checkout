/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React, { useState } from 'react';
import CountriesDropdown from '../CountriesDropdown';
import cvcIcon from '../../assets/cvcIcon.svg';

const CardPaymentForm = function () {
  const validationsForm = (formulary) => {
    const errorsMessage = {};
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i;
    const validateEmail = emailRegex.test(formulary.email);
    if (!validateEmail) {
      errorsMessage.email = '* Email incorrecto';
    } else {
      errorsMessage.email = '';
    }
    const cardRegex = /[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})/;
    const validateCard = cardRegex.test(formulary.cardNumber);
    if (!validateCard) {
      errorsMessage.cardNumber = '* Número incorrecto';
    } else {
      errorsMessage.cardNumber = '';
    }
    const dateRegex = /(?:0[1-9]|1[0-2])\/[0-9]{2}/;
    const validateDate = dateRegex.test(formulary.dataExpiration);
    if (!validateDate) {
      errorsMessage.dataExpiration = '* Fecha incorrecta';
    } else {
      errorsMessage.dataExpiration = '';
    }
    const cvcRegex = /^[0-9]{3,4}$/;
    const validateCvc = cvcRegex.test(formulary.cvcNumber);
    if (!validateCvc) {
      errorsMessage.cvcNumber = '* Número CVC incorrecto';
    } else {
      errorsMessage.cvcNumber = '';
    }
    return errorsMessage;
  };
  const initialForm = {
    email: '',
    cardNumber: '',
    dataExpiration: '',
    cvcNumber: '',
    name: '',
    country: '',
    zip: '',
  };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
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
            onChange={handleChange}
            required
          />
          <div className="error-container">
            {errors.email && <span>{errors.email}</span>}
          </div>
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
              name="cardNumber"
              id="number"
              maxLength="19"
              className="form-control top"
              onChange={handleChange}
              required
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
                name="dataExpiration"
                id="expiry"
                maxLength="5"
                className="form-control bottom-left"
                placeholder="MM / YY"
                onChange={handleChange}
                required
              />
            </label>
            <div className="error-container">
              {errors.cardNumber && <span>{errors.cardNumber}</span>}
              {errors.dataExpiration && <span>{errors.dataExpiration}</span>}
              {errors.cvcNumber && <span>{errors.cvcNumber}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="cvc">
              <input
                type="text"
                inputMode="numeric"
                name="cvcNumber"
                id="cvc"
                maxLength="3"
                className="form-control bottom-right"
                placeholder="CVC"
                onChange={handleChange}
                required
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
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <CountriesDropdown />
      <input onClick={handleSubmit} type="submit" className="button-pay" value="Pay $899.00" />
    </form>
  );
};

export default CardPaymentForm;
