// src/components/YellowLight.jsx
import React from 'react';
import './Light.css'; // Shared styles

const YellowLight = ({ isActive }) => {
  return (
    <div className={`light yellow ${isActive ? 'active' : ''}`}></div>
  );
};

export default YellowLight;
