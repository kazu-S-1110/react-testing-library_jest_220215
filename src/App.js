import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RenderInput from './RenderInput';
import FrameworkList from './FrameworkList';
import UseEffectRender from './UseEffectRender';

function App() {
  const data = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Vue',
    },
    {
      id: 3,
      item: 'Angular',
    },
    {
      id: 4,
      item: 'Svelte',
    },
    {
      id: 5,
      item: 'Preact',
    },
  ];

  const output = (text) => {
    console.log(text);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={data} />
        <UseEffectRender />
      </header>
    </div>
  );
}

export default App;
