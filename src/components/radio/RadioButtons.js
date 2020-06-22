import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({ radioButtons, name, handleChange, selected }) => {
  const radioButtonElements = radioButtons.map(({ label, value }) => (    
    <RadioButton key={value} label={label} value={value} selected={selected} name={name} handleChange={handleChange} /> 
  ));
  return (
    <> 
      {radioButtonElements}
    </>
  );
    
};

RadioButtons.propTypes = {
  radioButtons: 
    PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  name: 
    PropTypes.string,
  selected: 
  PropTypes.string,
  handleChange: 
  PropTypes.func,
};

export default RadioButtons
;
