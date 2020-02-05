import React, { useState, useEffect }  from 'react';
import { getAAPL, getAMZN, getGILD, getStock } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';
import Form from '../components/form/Form';

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
  const [stockProvider, setStockProvider] = useState('AMZN'); 
  const [stock, setStock] = useState({ symbol: '', price: '', priceChange: '' });
  const [stockSearchBar, setStockSearchBar] = useState(''); 
  
    
  let handelChange = ({ target }) => {
    setStockProvider(target.value);
    console.log(stockProvider);
    
  };

  let searchStocks = ({ target }) => {
    setStockSearchBar(target.value);
  };
    
  let fetch = () => {
    return stockProviderFactory[stockProvider]()
      .then(stock => {
        setStock(stock);          
      });
  };
  
  useEffect(()=> {
    fetch();
  }, [stockProvider]);

  let handleSubmit = (stockName) => {
    setStockSearchBar(stockName);
  };

  let returnSearchedStock = () => {
    return getStock(stockSearchBar)
      .then(stock => {
        setStock(stock);          
      });
  };

  useEffect(()=> {
    returnSearchedStock();
  }, [stockSearchBar]);




  return (
    <>
      <Form onClick={handleSubmit}></Form>
      <RadioButtons radioButtons={radioButtons} selected={stockProvider} name="stockProvider" handleChange={handelChange} />
      <StockInfo {...stock} />
    </>
  );
};

export default StockFetcherFn; 
