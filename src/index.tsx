import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl';

import './styles.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZWRib2xpdmFybWFmcm9udGVuZDgyIiwiYSI6ImNsMmgybDVkZTAwY3IzY3A4ZGN5MHRrMXEifQ.zbiGMxUeuHIR2wEnpnhQZg';

if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);