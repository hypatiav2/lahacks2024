
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Control } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './DestinationScreen.css'
import './Components/TimerWithProgressBar';
import TimerWithProgressBar from './Components/TimerWithProgressBar';
import earthIcon from './assets/earth-icon.png'

mapboxgl.accessToken = 'pk.eyJ1IjoibGF2aW5pYWxlaSIsImEiOiJjbHY3dXplOGYwM2U4MnFudHR5MjA0bTk4In0.ymT5DfEXRZHV4EFytkCLbA';

export default function DestinationScreen() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-118.440);
  const [lat, setLat] = useState(34.075);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });

    map.current.addControl(
      new mapboxgl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
      }), 'top-right'
    );

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(3));
      setLat(map.current.getCenter().lat.toFixed(3));
      setZoom(map.current.getZoom().toFixed(1));
    });

    const marker = new mapboxgl.Marker({
      color: "#ffa500"
  }).setLngLat([-118.4382, 34.0778])
      .addTo(map.current);

  });



  return (
    <div>
        <div className='headline'>
          <img src={earthIcon} alt="Image" className='earthIcon' />
          <h1 className="title">destination</h1>
        </div>
       
      <div ref={mapContainer} className="map-container" />
      
       <div className="loc-data"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
       <TimerWithProgressBar initTime={30} />
       <button className="hereButton">im here</button>
    </div>
  );
}