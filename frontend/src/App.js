import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        {data.map(({ title, body }) => (
          <>
            <h1>{title}</h1>
            <p>{body}</p>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
