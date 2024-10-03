import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/header';
import Container from './Components/Container';
import Error from './Error';
import Para from './Components/para'
import { UseContextData } from './store/context';

function App() {
  const [content, setContent] = useState([]);

  const addContent = (event) => {
    const value = event.target.value;
    if (event.key === 'Enter') {
      setContent(prevArr => [...prevArr, value]);
      event.target.value = ''; 
    }
  };

  return (
    <UseContextData.Provider value={content}>
    <Container>
      <div className="container mt-4">
        <Header />
        <hr />
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Enter Food Item</span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onKeyDown={addContent}
            />
          </div>
          {content.length === 0 && <Error />}
        <ul className="list-group">
          {content.map((item, index) => (
            <li key={index} className="list-group-item">
              <Para
              Change={false} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
    </UseContextData.Provider>
  );
}

export default App;
