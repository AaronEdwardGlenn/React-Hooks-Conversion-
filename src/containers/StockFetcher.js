import React, { Component } from 'react';
import getStock from '../services/stocksAPI';
import StockInfo from '../components/StockInfo';
import RadioButtons from '../components/radio/RadioButtons';


export default class StockFetcher extends Component {
    state = {
      stock: '',
      price: '',
      percentChange: ''
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
        </>
      );
    }
}
