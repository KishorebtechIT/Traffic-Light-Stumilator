// src/components/RedLight.jsx
import React from 'react';
import './Light.css'; // Shared styles

const RedLight = ({ isActive }) => {
  return (
    <div className={`light red ${isActive ? 'active' : ''}`}></div>
  );
};

export default RedLight;
