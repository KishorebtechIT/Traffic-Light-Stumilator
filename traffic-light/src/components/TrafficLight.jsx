// src/components/TrafficLight.jsx
import React, { useState, useEffect } from 'react';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import PedestrianButton from './PedestrianButton';
import EmergencyOverrideButton from './EmergencyOverrideButton';
import './TrafficLight.css'; // For overall styling

const TrafficLight = () => {
  // State variables
  const [currentLight, setCurrentLight] = useState('Green');
  const [pedestrianRequested, setPedestrianRequested] = useState(false);
  const [timer, setTimer] = useState(10);
  const [additionalRedTime, setAdditionalRedTime] = useState(0); // Extra red time for pedestrians

  // Effect hook to handle light transitions and timers
  useEffect(() => {
    let timeoutId;

    if (pedestrianRequested) {
      // Handle pedestrian crossing
      if (currentLight === 'Red') {
        // Keep the light red for additional time
        timeoutId = setTimeout(() => {
          setPedestrianRequested(false);
          setAdditionalRedTime(0);
          setCurrentLight('Green');
          setTimer(10);
        }, (7000 + additionalRedTime * 1000));
      } else {
        // Wait for the current light phase to end
        timeoutId = setTimeout(() => {
          setCurrentLight('Red');
          setTimer(7);
          setAdditionalRedTime(5); // Add extra red time
        }, timer * 1000);
      }
    } else {
      switch (currentLight) {
        case 'Green':
          timeoutId = setTimeout(() => {
            setCurrentLight('Yellow');
            setTimer(3);
          }, 10000);
          break;
        case 'Yellow':
          timeoutId = setTimeout(() => {
            setCurrentLight('Red');
            setTimer(7);
          }, 3000);
          break;
        case 'Red':
          timeoutId = setTimeout(() => {
            setCurrentLight('Green');
            setTimer(10);
          }, 7000);
          break;
        default:
          break;
      }
    }

    // Cleanup timer on component unmount or when state changes
    return () => clearTimeout(timeoutId);
  }, [currentLight, pedestrianRequested, additionalRedTime, timer]);

  // Handlers for button clicks
  const handlePedestrianRequest = () => {
    if (currentLight !== 'Red') {
      setPedestrianRequested(true);
    }
  };

  const handleEmergencyOverride = () => {
    // Handle emergency override if needed
    // Example implementation
    setCurrentLight('Green');
    setTimer(10);
    setPedestrianRequested(false);
  };

  return (
    <div className="traffic-light">
      <RedLight isActive={currentLight === 'Red'} />
      <YellowLight isActive={currentLight === 'Yellow'} />
      <GreenLight isActive={currentLight === 'Green'} />
      <div className="timer">{timer}s</div>
      <PedestrianButton onRequest={handlePedestrianRequest} />
      <EmergencyOverrideButton onOverride={handleEmergencyOverride} />
    </div>
  );
};

export default TrafficLight;
