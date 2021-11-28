import React from 'react';
import './style.scss';

const Footer = function () {
  return (
    <footer>
      <div className="left-content">
        <div>Powered by</div>
        <img src="https://i.ibb.co/D4WN7FD/image-5.png" alt="logo-redsys" />
      </div>
      <div className="right-content">
        <button type="button">Terms</button>
        <button type="button">Privacy</button>
      </div>
    </footer>
  );
};

export default Footer;
