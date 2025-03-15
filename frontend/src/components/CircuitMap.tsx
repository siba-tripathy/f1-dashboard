// CircuitMap.tsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

interface CircuitMapProps {
  lat: string;
  long: string;
  circuitName: string;
}

const CircuitMap: React.FC<CircuitMapProps> = ({ lat, long, circuitName }) => {
  useEffect(() => {
    const map = L.map('circuit-map').setView([parseFloat(lat), parseFloat(long)], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([parseFloat(lat), parseFloat(long)])
      .addTo(map)
      .bindPopup(circuitName);

    return () => {
      map.remove();
    };
  }, [lat, long, circuitName]);

  return (
    <Box 
      id="circuit-map" 
      sx={{ 
        height: '200px', 
        width: '300px',
        borderRadius: 1,
        overflow: 'hidden'
      }} 
    />
  );
};

export default CircuitMap;
