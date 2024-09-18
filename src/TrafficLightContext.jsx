import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Initial state
const initialState = {
  currentLight: 'Green',
  pedestrianRequest: false,
  timer: 10,
  emergencyOverride: false,
  additionalRedTime: 0, // To handle extra red time
};

// Actions
const CHANGE_LIGHT = 'CHANGE_LIGHT';
const REQUEST_CROSSING = 'REQUEST_CROSSING';
const RESET_TIMER = 'RESET_TIMER';
const EMERGENCY_OVERRIDE = 'EMERGENCY_OVERRIDE';

// Reducer
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      return { ...state, currentLight: action.payload };
    case REQUEST_CROSSING:
      return { ...state, pedestrianRequest: true, additionalRedTime: 5 };
    case RESET_TIMER:
      return { ...state, timer: action.payload };
    case EMERGENCY_OVERRIDE:
      return { ...state, emergencyOverride: true };
    default:
      return state;
  }
};

// Context
const TrafficLightContext = createContext();

export const useTrafficLight = () => useContext(TrafficLightContext);

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  useEffect(() => {
    let timer;
    if (!state.emergencyOverride) {
      switch (state.currentLight) {
        case 'Green':
          timer = setTimeout(() => {
            dispatch({ type: CHANGE_LIGHT, payload: 'Yellow' });
            dispatch({ type: RESET_TIMER, payload: 3 });
          }, 10000);
          break;
        case 'Yellow':
          timer = setTimeout(() => {
            dispatch({ type: CHANGE_LIGHT, payload: 'Red' });
            dispatch({ type: RESET_TIMER, payload: 7 });
          }, 3000);
          break;
        case 'Red':
          if (state.additionalRedTime > 0) {
            // Handle additional red time for pedestrian crossing
            timer = setTimeout(() => {
              dispatch({ type: CHANGE_LIGHT, payload: 'Green' });
              dispatch({ type: RESET_TIMER, payload: 10 });
              dispatch({ type: REQUEST_CROSSING, payload: false });
            }, 7000 + state.additionalRedTime * 1000);
          } else {
            timer = setTimeout(() => {
              if (state.pedestrianRequest) {
                dispatch({ type: CHANGE_LIGHT, payload: 'Green' });
                dispatch({ type: RESET_TIMER, payload: 10 });
                dispatch({ type: REQUEST_CROSSING, payload: false });
              } else {
                dispatch({ type: CHANGE_LIGHT, payload: 'Green' });
                dispatch({ type: RESET_TIMER, payload: 10 });
              }
            }, 7000);
          }
          break;
        default:
          break;
      }
    } else {
      // Emergency Override
      dispatch({ type: CHANGE_LIGHT, payload: 'Green' });
      dispatch({ type: RESET_TIMER, payload: 10 });
      dispatch({ type: EMERGENCY_OVERRIDE, payload: false });
    }

    return () => clearTimeout(timer);
  }, [state.currentLight, state.pedestrianRequest, state.emergencyOverride, state.additionalRedTime]);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};
