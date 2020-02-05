import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';


const Form = ({ onClick }) => {

  const [search, setSerach] = useState('');

  let handleChange = ({ target }) => {
    setSerach(target.value);
  };

  return (
    <form className={styles.Form}>
    
      <input type="search" placeholder="Enter Stock Symbol..." onChange={handleChange} value={search}> 
      </input>
      <button type="button" onClick={() => onClick(search)}>Search!</button>


    </form>
  );
};


Form.propTypes = {
  onChange: 
  PropTypes.func.isRequired,
  value: 
  PropTypes.string.isRequired,
  onClick: 
  PropTypes.func.isRequired,
};

export default Form; 
