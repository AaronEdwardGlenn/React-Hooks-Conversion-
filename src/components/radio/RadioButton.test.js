import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('radiobuttons component', () => {
  it('matches the snap', () => {
    const wrapper = shallow(<RadioButton name="rad name" label = "rad lable" value = "rad value" onChange = {() => {}} />);
    expect(wrapper).toMatchSnapshot(); 
  });
  
});
