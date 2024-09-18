import React from 'react';
import './EmergencyOverrideButton.css';

const EmergencyOverrideButton = ({ onOverride }) => {
  return (
    <button className="emergency-button" onClick={onOverride}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
