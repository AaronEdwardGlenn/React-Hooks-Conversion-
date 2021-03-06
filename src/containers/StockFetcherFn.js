import React, { useState, useEffect }  from 'react';
import { getAAPL, getAMZN, getGILD, getStock } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';
import Form from '../components/form/Form';
import FormTwo from '../components/form/FormTwo';

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
  const [stock, setStock] = useState({ symbol: '', price: '', priceChange: '-420.69%' });
  const [stockSearchBar, setStockSearchBar] = useState(''); 
  const [state, setState] = useState([]);

    
  let handelChange = ({ target }) => {
    setStockProvider(target.value);
    
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

  let arr = [];

  let handleSubmit = (stockName) => {
    setStockSearchBar(stockName);
    setState([stockName]);
    arr.push(stockName);
    ls.set('historyArray', arr);
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
      <p>
        <Form onClick={handleSubmit}></Form>
      </p>

      <FormTwo onChange={searchStocks} value={stockSearchBar}></FormTwo>
      <RadioButtons radioButtons={radioButtons} selected={stockProvider} name="stockProvider" handleChange={handelChange} />
      <StockInfo {...stock} />
      <p>You clicked {state} </p>
    </>
  );
};

export default StockFetcherFn; 
