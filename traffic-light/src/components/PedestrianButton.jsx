import React from 'react';
import './PedestrianButton.css';

const PedestrianButton = ({ onRequest }) => {
  return (
    <button className="pedestrian-button" onClick={onRequest}>
      Request Crossing
    </button>
  );
};

export default PedestrianButton;
