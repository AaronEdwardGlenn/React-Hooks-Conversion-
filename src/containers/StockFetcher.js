import React, { Component } from 'react';
import { getAPPL, getAMZN, getGILD } from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';

const stockProviderFactory = {
  GILD: getGILD,
  APPL: getAPPL,
  AMZN: getAMZN
};

export default class StockFetcher extends Component {
    state = {
      symbol: 'GILD',
      price: '',
      dailyChange: ''
    }

    componentDidMount() {
      this.fetch(); 
    }

    changeStockProvider = ({ target }) => {
      this.setState({ symbol: target.value });
    }

    fetch = () => {
      return stockProviderFactory[this.state.symbol]()
        .then(stock => this.setState({ stock }));
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
          <RadioButtons radioButtons={radioButtons} name="stock" onChange={this.changeStockProvider} />
          <StockInfo {...stock} />
        </>
      );
    }
}
