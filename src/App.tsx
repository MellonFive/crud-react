import { useState } from 'react'
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <input placeholder="Fazer café" />
        <button>Adicionar</button>
      </div>

      <Card title="Fazer café" />
    </div>
  )
}

export default App

// JSX

// HTML dentro do código JS