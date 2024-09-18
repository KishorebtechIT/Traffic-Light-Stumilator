import React from 'react';
import './Light.css'; 

const GreenLight = ({ isActive }) => {
  return (
    <div className={`light green ${isActive ? 'active' : ''}`}></div>
  );
};

export default GreenLight;
