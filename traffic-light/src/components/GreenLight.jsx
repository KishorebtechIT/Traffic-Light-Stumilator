// src/components/GreenLight.jsx
import React from 'react';
import './Light.css'; // Shared styles

const GreenLight = ({ isActive }) => {
  return (
    <div className={`light green ${isActive ? 'active' : ''}`}></div>
  );
};

export default GreenLight;
