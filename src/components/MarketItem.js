import React from 'react';
import { Link } from 'react-router-dom';

const MarketItem = () => (
  <>
    <h3>Market Item</h3>
    <ul>
      <li><Link to="/coin">Coinbase</Link></li>
      <li><Link to="/zappo">Zappo</Link></li>
      <li><Link to="/binance">Binance</Link></li>
    </ul>
  </>
);

export default MarketItem;
