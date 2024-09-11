import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [savedCounts, setSavedCounts] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const save = () => {
    setSavedCounts([...savedCounts, count]);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>People entered:</h1>
      <h2 id="count-el">{count}</h2>
      <button id="increment-btn" onClick={increment}>INCREMENT</button>
      <button id="save-btn" onClick={save}>SAVE</button>
      <p>Previous entries: {savedCounts.join(" - ")}</p>
    </div>
  );
}

export default App;
