import React, { useRef, useEffect, useState } from 'react';
import HomeButton from './Components/HomeButton';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGF2aW5pYWxlaSIsImEiOiJjbHY3dXplOGYwM2U4MnFudHR5MjA0bTk4In0.ymT5DfEXRZHV4EFytkCLbA';

export default function DestinationScreen() {

    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

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
       <h1 className="title">destination</h1>
       <div className="map"></div>
       <div ref={mapContainer} className="map-container" />
    <button className="hereButton">im here</button>
    </div>
  );
}