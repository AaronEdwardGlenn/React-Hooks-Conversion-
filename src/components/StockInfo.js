import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockInfo.css';


const StockInfo = ({ symbol, price, dailyChange }) => (
  <>
    <div className={styles.StockInfo}>
      <p> Symbol: {symbol} </p> 
      <p>  Price: {price} </p>
      <p>  Daily Change: {dailyChange} </p>
    </div>
  </>
);

StockInfo.propTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string,
  dailyChange: PropTypes.string,
};

export default StockInfo;
