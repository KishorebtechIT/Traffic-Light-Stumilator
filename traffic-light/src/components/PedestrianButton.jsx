// src/components/PedestrianButton.jsx
import React from 'react';
import './PedestrianButton.css'; // For button styling

const PedestrianButton = ({ onRequest }) => {
  return (
    <button className="pedestrian-button" onClick={onRequest}>
      Request Crossing
    </button>
  );
};

export default PedestrianButton;
