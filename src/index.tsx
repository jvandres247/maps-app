/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

// @ts-ignore
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoianZhbmRyZXMyNDciLCJhIjoiY2w0ZGU5M3RkMDdoMjNqczZ5enNoa2MzMSJ9.Cay8M2afYw9VQK9NLhM5kg';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if(!navigator.geolocation) {
  alert('tu navegador no tiene opcion de geolocalizacion');
  throw new Error('tu navegador no tiene opcion de geolocalizacion')
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
