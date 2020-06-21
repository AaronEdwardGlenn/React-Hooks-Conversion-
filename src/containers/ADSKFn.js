import React, { useState, useEffect }  from 'react';
import { getADSK } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';

const stockProviderFactory = {
    ADSK: getADSK
}

const StockFetcherFn = () => {
  const [stockProvider, setStockProvider] = useState('ADSK');
  const [stock, setStock] = useState({ symbol: '#', price: '#', priceChange: '-420.69%' });

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
      <p>
      <StockInfo {...stock} />
     </p>
    </>
  );
};

export default StockFetcherFn;
