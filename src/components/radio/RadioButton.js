import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

const RadioButton = ({ name, label, value, handleChange }) => (

  <div className={styles.RadioButton}>
    <input type="radio" name={name} label={label} value={value} onChange={handleChange} />
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  name: 
    PropTypes.string.isRequired,
  label: 
    PropTypes.string.isRequired,
  value: 
    PropTypes.string.isRequired,
  selected: 
  PropTypes.string.isRequired,
  handleChange: 
  PropTypes.func.isRequired,
};

export default RadioButton; 
