import React from 'react';
import './Light.css'; 

const YellowLight = ({ isActive }) => {
  return (
    <div className={`light yellow ${isActive ? 'active' : ''}`}></div>
  );
};

export default YellowLight;
