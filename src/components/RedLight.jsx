import React from 'react';
import './Light.css';

const RedLight = ({ isActive }) => {
  return (
    <div className={`light red ${isActive ? 'active' : ''}`}></div>
  );
};

export default RedLight;
