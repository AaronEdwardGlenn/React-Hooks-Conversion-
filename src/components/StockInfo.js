import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockInfo.css';


const StockInfo = ({ symbol, price, dailyChange }) => {
  let change = dailyChange; 
  let arr = [];

  if(change) {
    arr.push(change.split(''));
  }
  let dailyChangeSplit = arr[0];
  let arr2 = []; 

  if(dailyChangeSplit) {
    arr2.push(dailyChangeSplit[0]);
  }

  let dailyChangeStyle;

  if(arr2[0] === '-'){
    dailyChangeStyle = { color: 'red' };
  } else {
    dailyChangeStyle = { color: 'green' };
  }

  return (
    <>
      <div className={styles.StockInfo}>
        <p> Symbol: {symbol} </p> 
        <p>  Price: {price} </p>
        <p style={dailyChangeStyle}>  <span style={{ color: 'black' }}>Daily Change: </span> {dailyChange} </p>
      </div>
    </>
  );};

StockInfo.propTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string,
  dailyChange: PropTypes.string,
};

export default StockInfo;
