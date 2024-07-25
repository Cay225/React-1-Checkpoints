// src/PlayersList.js
import React from 'react';
import Player from './Player';
import players from './players';
import './PlayersList.css'; // Pour les styles personnalisés de PlayersList

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
