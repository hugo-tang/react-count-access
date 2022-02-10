import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    fetch('/count').then(res => res.json()).then(data => {
      setCurrentCount(data.pageCount);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">

        <p>The current count is {currentCount}.</p>
      </header>
    </div>
  );
}

export default App;