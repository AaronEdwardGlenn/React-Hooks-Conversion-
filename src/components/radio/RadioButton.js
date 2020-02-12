import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

const RadioButton = ({ name, label, value, handleChange, selected }) => (

  <div className={styles.RadioButton}>
    <input type="radio" name={name} label={label} value={value} checked={selected === value} onChange={handleChange} />
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  name: 
    PropTypes.string,
  label: 
    PropTypes.string,
  value: 
    PropTypes.string,
  selected: 
  PropTypes.string,
  handleChange: 
  PropTypes.func,
};

export default RadioButton; 
