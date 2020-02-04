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
      stockProvider: 'GILD',
      stock: { symbol: '', price: '', priceChange: '' }
    }

    componentDidMount() {
      this.fetch(); 
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
        { label: 'Apple', value: 'APPL' },
        { label: 'Gilead', value: 'GILD' }, 
        { label: 'Amazon', value: 'AMZN' }
      ];

      return (
        <>
          <RadioButtons radioButtons={radioButtons} name="stockProvider" onChange={this.changeStockProvider} />
          <StockInfo {...stock} />
        </>
      );
    }
}
