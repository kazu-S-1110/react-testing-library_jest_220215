import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RenderInput from './RenderInput';

function App() {
  const output = (text) => {
    console.log(text);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput outputConsole={output} />
      </header>
    </div>
  );
}

export default App;
