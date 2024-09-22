import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/header';
import Container from './Components/Container';
import Error from './Error';
import Para from './Components/para'

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
          {content.length === 0 && <Error arr={content} />}
        <ul className="list-group">
          {content.map((item, index) => (
            <li key={index} className="list-group-item">
              <Para Listitem={item} Change={false} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default App;
