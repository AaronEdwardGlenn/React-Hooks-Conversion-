import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onChange, value }) => (

  <form className={styles.Form}>
    <input type="search" placeholder="Stock Symbol" onChange={onChange} value={value}>   
    </input>

  </form>
);


Form.propTypes = {
  onChange: 
  PropTypes.func.isRequired,
  value: 
  PropTypes.string.isRequired,
};

export default Form; 
