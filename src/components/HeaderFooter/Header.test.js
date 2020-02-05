import React from 'react';
import { shallow }  from 'enzyme';
import Header from './Header';

describe('Headerz component', () => {
  it('renders a header', () => {
    const wrapper = shallow(<Header />); 
    expect(wrapper).toMatchSnapshot(); 
  });
});
