import React from 'react';
import Board from './components/board';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="neon-text">Tateti Neón</h1>
      <Board />
    </div>
  );
};

export default App;
