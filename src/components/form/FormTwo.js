import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const FormTwo = ({ onChange, value }) => (
    

  <form className={styles.Form}>
    <input type="search" placeholder="Return Stock Symbol..." onChange={onChange} value={value}> 
    </input>


  </form>
);


FormTwo.propTypes = {
  onChange: 
  PropTypes.func.isRequired,
  value: 
  PropTypes.string.isRequired,
};

export default FormTwo; 
