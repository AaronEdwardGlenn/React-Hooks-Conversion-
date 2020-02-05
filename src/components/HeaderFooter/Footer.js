import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.Footer}>
          <p>&copy; 2020 - Aaron Edward Glenn</p>
        </footer>
      </>
    );
  }
}
