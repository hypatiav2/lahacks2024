import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';
import DestinationScreen from './DestinationScreen';

ReactDOM.render(
  <React.StrictMode>
    <DestinationScreen />
  </React.StrictMode>,
  document.getElementById('root')
);