import React from 'react';
import './App.css';
import Today from './components/Today';
import WeatherState from './context/weather/WeatherState'

function App() {
  return (
    <WeatherState>
      <Today />
    </WeatherState>
  );
}

export default App;
