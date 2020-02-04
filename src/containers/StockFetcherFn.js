import React, { useState, useEffect }  from 'react';
import { getAAPL, getAMZN, getGILD } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';

const stockProviderFactory = {
  GILD: getGILD,
  AAPL: getAAPL,
  AMZN: getAMZN
};

const radioButtons = [
  { label: 'Apple', value: 'AAPL' },
  { label: 'Gilead', value: 'GILD' }, 
  { label: 'Amazon', value: 'AMZN' }
];
  
const StockFetcherFn = () => {
  const [stockProvider, setStockProvider] = useState('AAPL'); 
  const [stock, setStock] = useState({ symbol: '', price: '', priceChange: '' });

  let fetch = () => {
    return stockProviderFactory[stockProvider]()
      .then(stock => {
        setStock(stock);          
      });
  };
  
  useEffect(()=> {
    fetch();
  }, [stockProvider]);

  return (
    <>
      <RadioButtons radioButtons={radioButtons} selected={stockProvider} name="stockProvider" onChange={setStockProvider} />
      <StockInfo {...stock} />
    </>
  );

};

export default StockFetcherFn; 
