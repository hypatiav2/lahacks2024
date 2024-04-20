//import React, { useEffect } from 'react';
import './DestinationScreen.css';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// import L from 'leaflet'; // Import Leaflet library
//import { MapContainer, TileLayer, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet';
import ProgressTimer from 'react-progress-bar-timer';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl';

//mapboxgl.accessToken = 'sk.eyJ1IjoibGF2aW5pYWxlaSIsImEiOiJjbHY4Ym0xMXowMWlhMm11anl5cHFtNjFtIn0.0gwuPuTqN-uS1wf3Z1HLLQ';

// export default function DestinationScreen() {
//   useEffect(() => {
//     // Initialize the map
//     const map = L.map('map').setView([51.505, -0.09], 13);

//     // Add OpenStreetMap tiles
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);

//     // Add a marker
//     L.marker([51.505, -0.09]).addTo(map)
//       .bindPopup('A pretty CSS3 popup. <br /> Easily customizable.')
//       .openPopup();
//   }, []);

//   return(
//     <div id="map">
//         <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   )
// }

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

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="container">
       <h1 className="title">destination</h1>
       <div className="map"></div>
       <ProgressTimer 
        duration={10} 
         barRounded="true"
         fontColor="#000000"
         fontSize="5px"
        margin="10px"
         color="#B0D4B0"
       />
    <button className="hereButton">im here</button>
     </div>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" /> */}
    </div>
  );

  // return(
  //   <div className="container">
  //     <h1 className="title">destination</h1>
  //     <div className="map"></div>
  //     <ProgressTimer 
  //       duration={10} 
  //       barRounded="true"
  //       fontColor="#000000"
  //       fontSize="5px"
  //       margin="10px"
  //       color="#B0D4B0"
  //     />
  //     <button className="hereButton">im here</button>
  //   </div>
  // )
  

  
  // return(
  //   <div className="container">
  //     <h1 className="title">destination</h1>
  //     <div className="map"></div>
  //     <button className="hereButton">im here</button>
  //   </div>
  // )
}

  