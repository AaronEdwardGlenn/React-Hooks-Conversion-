import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({ radioButtons, name, onChange, selected }) => {
  const radioButtonElements = radioButtons.map(({ label, value }) => (    
    <RadioButton key={value} label={label} value={value} name={name} selected={selected} onChange={onChange} /> 
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
  onChange: 
    PropTypes.func.isRequired,
  selected: 
  PropTypes.string.isRequired,
};

export default RadioButtons
;
