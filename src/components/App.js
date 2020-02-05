import React from 'react';

import StockFetcherFn from '../containers/StockFetcherFn';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

export default function App() {
  return (
    <>
      <Header />
      <StockFetcherFn />
      <Footer />
    </>
  );
}
  
