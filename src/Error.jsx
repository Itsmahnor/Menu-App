import React from 'react';
import styles from './error.module.css'; // Import CSS module for error styling

const Error = ({ arr }) => {
  return (
    <div className={styles.errorContainer}>
      {arr.length === 0 && <h1 className={styles.errorMessage}>List is Empty</h1>}
    </div>
  );
};

export default Error;
