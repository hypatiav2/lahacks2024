import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './DestinationScreen.css'
import './Components/TimerWithProgressBar'; // Adjust the path if necessary
import TimerWithProgressBar from './Components/TimerWithProgressBar';
import earthIcon from './assets/earth-icon.png'

mapboxgl.accessToken = 'pk.eyJ1IjoibGF2aW5pYWxlaSIsImEiOiJjbHY3dXplOGYwM2U4MnFudHR5MjA0bTk4In0.ymT5DfEXRZHV4EFytkCLbA';

export default function DestinationScreen() {

    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-118.444);
  const [lat, setLat] = useState(34.072);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
        <div className='headline'>
          <img src={earthIcon} alt="Image" className='earthIcon' />
          <h1 className="title">destination</h1>
        </div>
       <div ref={mapContainer} className="map-container" />
       <div className="white-rectangle"></div>
       <TimerWithProgressBar initTime={30} />
       <button className="hereButton">im here</button>
    </div>
  );
}