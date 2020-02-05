import React from 'react';
import { shallow }  from 'enzyme';
import Footer from './Footer';

describe('Footerz component', () => {
  it('renders a footer', () => {
    const wrapper = shallow(<Footer />); 
    expect(wrapper).toMatchSnapshot(); 
  });
});
