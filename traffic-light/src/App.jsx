import React from 'react';
import { TrafficLightProvider } from './TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import './App.css'; 

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
