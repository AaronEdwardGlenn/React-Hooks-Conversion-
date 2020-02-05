import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({ radioButtons, name, handleChange }) => {
  const radioButtonElements = radioButtons.map(({ label, value }) => (    
    <RadioButton key={value} label={label} value={value} name={name} handleChange={handleChange} /> 
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
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  name: 
    PropTypes.string.isRequired,
  selected: 
  PropTypes.string.isRequired,
  handleChange: 
  PropTypes.func.isRequired,
};

export default RadioButtons
;
