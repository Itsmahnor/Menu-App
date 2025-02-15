import React, { useState } from 'react';
import styles from './para.module.css';

export default function Para({ Listitem, Change }) {
  const [selected, setSelected] = useState(Change);

  const Selection = () => {
    setSelected(prev => !prev);
  };

  return (
    <div className={`list-group ${styles.myListGroup}`}>
      <div 
        style={{ backgroundColor: selected ? '#007bff' : '#ffffff' }} 
        className={`list-group-item d-flex justify-content-between align-items-start ${styles.myListItem}`}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{Listitem}</div>
        </div>
        <button 
        
          className={`btn ${selected ? 'btn-light' : 'btn-dark'} ${styles.myButton}`} 
          onClick={Selection}
        >
          {selected ? 'Remove' : 'Add'}
        </button>
      </div>
    </div>
  );
}
