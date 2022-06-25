import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <span>
        &copy;
        Copyright
        {' '}
        {year}
        . Crypto Exchanges
      </span>
    </div>
  );
};

export default Footer;
