// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageUrl} className="player-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
