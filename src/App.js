import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>People entered:</h1>
      <h2 id="count-el">{count}</h2>
      <button id="increment-btn" onClick={increment}>INCREMENT</button>
    </div>
  );
}

export default App;
