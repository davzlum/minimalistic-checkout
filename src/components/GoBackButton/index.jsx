import React from 'react';
import arrowIcon from '../../assets/arrow.svg';
import './style.scss';

const GoBackButton = function () {
  return (
    <div className="button-back">
      <div className="arrow">
        <img src={arrowIcon} alt="arrow-left" />
      </div>
      <button type="button">Back to the market</button>
    </div>
  );
};

export default GoBackButton;
