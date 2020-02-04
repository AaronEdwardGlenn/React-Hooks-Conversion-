import React, { Component } from 'react';
import { getAAPL, getAMZN, getGILD } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';

const stockProviderFactory = {
  GILD: getGILD,
  AAPL: getAAPL,
  AMZN: getAMZN
};

export default class StockFetcher extends Component {
    state = {
      stockProvider: 'AAPL',
      stock: { symbol: '', price: '', priceChange: '' }
    }

    componentDidMount() {
      this.fetch();
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.stockProvider !== this.state.stockProvider) {                    
        this.fetch(); 
      }
    }

    changeStockProvider = ({ target }) => {        
      this.setState({ stockProvider: target.value });
    }
    
    fetch = () => {
      return stockProviderFactory[this.state.stockProvider]()
        .then(stock => {          
          this.setState({ stock });
        });
    }
    
    render() {
      const { stock } = this.state; 
      const radioButtons = [
        { label: 'Apple', value: 'AAPL' },
        { label: 'Gilead', value: 'GILD' }, 
        { label: 'Amazon', value: 'AMZN' }
      ];

      return (
        <>
          <RadioButtons radioButtons={radioButtons} selected={this.state.stockProvider} name="stockProvider" onChange={this.changeStockProvider} />
          <StockInfo {...stock} />
        </>
      );
    }
}
