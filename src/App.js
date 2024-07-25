// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import './App.css'; // Pour les styles personnalisés

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player List</h1>
      </header>
      <PlayersList />
    </div>
  );
}

export default App;
