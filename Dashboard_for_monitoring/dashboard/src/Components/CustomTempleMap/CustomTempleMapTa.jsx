import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the coordinates for Durgai Amman Temple and features
const templeLocation = [12.9479, 80.1378]; // Coordinates for the Durgai Amman Temple in Chromepet, Chennai

const templeBounds = [
  [12.9481, 80.1380],
  [12.9485, 80.1385],
  [12.9484, 80.1390],
  [12.9480, 80.1385]
];

const features = [
  { position: [12.9482, 80.1379], label: 'முகவுரை' }, // Entrance
  { position: [12.9483, 80.1377], label: 'முக்கிய மண்டபம்' }, // Main Hall
  { position: [12.9481, 80.1376], label: 'ஆவணம்' } // Courtyard
];

const CustomTempleMapTa = () => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-medium uppercase tracking-[0.4rem] mb-4 text-center">
        இடம் வரைபடம்
      </h2>

      <MapContainer center={templeLocation} zoom={18} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Polygon 
          positions={templeBounds} 
          color="#007bff" 
          fillColor="#b0d0ff" 
          fillOpacity={0.5} 
          weight={2} 
        />
        {features.map((feature, index) => (
          <Marker key={index} position={feature.position}>
            <Popup>{feature.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CustomTempleMapTa;
