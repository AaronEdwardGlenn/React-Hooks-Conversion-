const key = process.env.API_KEY;

export const getAAPL = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${key}`)
    .then(res => res.json())
    .then(data => data['Global Quote']) 
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      dailyChange: data['10. change percent']  
    }));     
};

export const getGILD = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GILD&apikey=${key}`)
    .then(res => res.json())
    .then(data => data['Global Quote']) 
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      dailyChange: data['10. change percent']  
    })); 
};

  
export const getAMZN = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=${key}`)
    .then(res => res.json())
    .then(data => data['Global Quote']) 
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      dailyChange: data['10. change percent']  
    })); 
};
  
export const getStock = (stock) => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${key}`)
    .then(res => res.json())
    .then(data => data['Global Quote']) 
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      dailyChange: data['10. change percent']  
    })); 
};
