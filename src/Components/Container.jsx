import React from 'react';
import styles from './container.module.css'; // Import CSS module for container styling

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
