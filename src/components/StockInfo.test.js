import React from 'react';
import { shallow } from 'enzyme';
import StockInfo from './StockInfo'
;

describe('the stockinfo component', () => {
  it('can match the snap', () => {
    const wrapper = shallow(<StockInfo price="420" dailyChange="Calvin Coolidge" symbol="YEE" />);
    expect(wrapper).toMatchSnapshot(); 
  });
    
});
