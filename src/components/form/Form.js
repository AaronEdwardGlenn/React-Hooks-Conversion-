import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onChange, value, onClick }) => (

  <form className={styles.Form}>
    <input type="search" placeholder="Enter Stock Symbol..." onChange={onChange} value={value}> 
    </input>
    <button type="button" onClick={onClick}>Search!</button>


  </form>
);


Form.propTypes = {
  onChange: 
  PropTypes.func.isRequired,
  value: 
  PropTypes.string.isRequired,
  onClick: 
  PropTypes.func.isRequired,
};

export default Form; 
