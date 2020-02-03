import React from 'react';
import PropTypes from 'prop-types';


const StockInfo = ({ symbol, price, dailyChange }) => (
  <div>
        Symbol:{symbol}
        Price: {price}
        Daily Change: {dailyChange}
  </div>
);

StockInfo.propTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string,
  dailyChange: PropTypes.string,
};

export default StockInfo;
