
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiZGt1bnptYW43NyIsImEiOiJjbTBmZTJ5ZHMwd21jMmtvaDRnd2R5bzdkIn0.GL9DSkYbL4h8V6vbsWII-w';



function App() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.3359696);
    const [lat, setLat] = useState(40.5611021);
    const [zoom, setZoom] = useState(20);

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
    <div className="App">
        <div>
           <div ref={mapContainer} className="map-container" />
        </div>
    </div>
  );
}

export default App;
