// src/components/EmergencyOverrideButton.jsx
import React from 'react';
import './EmergencyOverrideButton.css'; // For button styling

const EmergencyOverrideButton = ({ onOverride }) => {
  return (
    <button className="emergency-button" onClick={onOverride}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
