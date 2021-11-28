import React from 'react';
import './style.scss';

const GoBackButton = function () {
  return (
    <div className="button-back">
      <div className="arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.41703 7H15C15.2652 7 15.5196 7.10535 15.7071 7.29289C15.8947 7.48043 16 7.73478 16 8C16 8.26521 15.8947 8.51957 15.7071 8.7071C15.5196 8.89464 15.2652 9 15 9H3.41703L8.00803 13.591C8.1958 13.7786 8.30135 14.0332 8.30144 14.2986C8.30153 14.5641 8.19617 14.8187 8.00853 15.0065C7.82089 15.1943 7.56634 15.2998 7.30088 15.2999C7.03543 15.3 6.7808 15.1946 6.59303 15.007L0.293031 8.707C0.10556 8.51947 0.000244141 8.26516 0.000244141 8C0.000244141 7.73483 0.10556 7.48053 0.293031 7.293L6.59303 0.992997C6.78094 0.805356 7.03569 0.700046 7.30124 0.700234C7.56679 0.700421 7.82139 0.806091 8.00903 0.993997C8.19667 1.1819 8.30198 1.43665 8.30179 1.7022C8.30161 1.96776 8.19594 2.22236 8.00803 2.41L3.41703 7Z" fill="#8792A2" />
        </svg>
      </div>
      <button type="button">Back to the market</button>
    </div>
  );
};

export default GoBackButton;
