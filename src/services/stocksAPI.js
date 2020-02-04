const key = process.env.API_KEY;

export const getAPPL = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=APPL&apikey=${key}`)
    .then(res => res.json())
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      chnagePercent: data['10. change percent']  
    })); 
};

export const getGILD = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=APPL&apikey=${key}`)
    .then(res => res.json())
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      chnagePercent: data['10. change percent']  
    })); 
};

  
export const getAMZN = () => {
  return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=APPL&apikey=${key}`)
    .then(res => res.json())
    .then(data => ({ 
      symbol: data['01. symbol'], 
      price: data['05. price'], 
      chnagePercent: data['10. change percent']  
    })); 
};
  
