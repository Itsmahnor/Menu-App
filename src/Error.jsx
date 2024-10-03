import React, { useContext,createContext } from 'react';
import styles from './error.module.css'; 
import { UseContextData } from './store/context';


const Error = () => {
const arr=useContext(UseContextData);

  return (
    <div className={styles.errorContainer}>
      {arr.length === 0 && <h1 className={styles.errorMessage}>List is Empty</h1>}
    </div>
  );
};

export default Error;
