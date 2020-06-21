import React, { useState } from 'react';
import './App.css';
import Parent from './parent.js';

import CounterContext from "./counterContext.js";
function App() {
  let countstate = useState(1);
  return (
    <CounterContext.Provider value={countstate}>
    <div className="App"  className="App-header">
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
