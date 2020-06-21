import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockInfo.css';
import DOMPurify from 'dompurify';


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
    let responseGif;

    if(arr2[0] === '-'){
        dailyChangeStyle = { backgroundColor: 'red' };
        responseGif = `<img src="https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/giphy.gif">`;
    } else {
        dailyChangeStyle = { backgroundColor: 'green' };
        responseGif = `<img src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"`
    }

    return (
        <>
        <div style={dailyChangeStyle}>
        <div className={styles.StockInfo}>
        <div className={styles.symbol} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(responseGif)}}></div>
        <p className={styles.price}>Daily Change: {dailyChange} </p>
        <p className={styles.price}>  Price: {price} </p>
        </div>
        </div>
        </>
    );};

    StockInfo.propTypes = {
        symbol: PropTypes.string,
        price: PropTypes.string,
        dailyChange: PropTypes.string,
    };

    export default StockInfo;
