import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.gridlayer.googlemutant';
import 'leaflet.heat'; // Heatmap plugin for Leaflet

// Define the coordinates for Durgai Amman Temple at Chromepet, Chennai
const templeLocation = [12.9485, 80.1378]; // Coordinates for the Durgai Amman Temple

// Function to generate random traffic data for zones
const generateTrafficData = () => {
  return [
    { zone: 'പ്രധാന പ്രവേശനം', people: Math.floor(Math.random() * 50) + 10, lat: 12.9487, lng: 80.1379 },
    { zone: 'സങ്ക്തം', people: Math.floor(Math.random() * 70) + 30, lat: 12.9486, lng: 80.1375 },
    { zone: 'അന്തരംഗ ഹാൾ', people: Math.floor(Math.random() * 80) + 20, lat: 12.9483, lng: 80.1374 },
    { zone: 'ബാഹ്യ Courtyard', people: Math.floor(Math.random() * 40) + 5, lat: 12.9482, lng: 80.1372 },
  ];
};

const getHeatIntensity = (people) => {
  return people / 100; // Normalize the intensity for the heatmap (value between 0 and 1)
};

// Custom Heatmap component
const Heatmap = ({ trafficData }) => {
  const map = useMap();

  useEffect(() => {
    const heatData = trafficData.map((zone) => [zone.lat, zone.lng, getHeatIntensity(zone.people)]);
    
    const heatLayer = L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [trafficData, map]);

  return null;
};

const TrafficDensityMapMl = () => {
  const [trafficData, setTrafficData] = useState(generateTrafficData());

  // Update traffic data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(generateTrafficData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
      <h2 className="text-lg font-medium uppercase tracking-[0.4rem] mb-4 text-center">
        നേരിട്ടുള്ള ട്രാഫിക് ഡൻസിറ്റി
      </h2>

      {/* Map Display */}
      <div className="w-full h-96">
        <MapContainer center={templeLocation} zoom={18} scrollWheelZoom={false} className="h-full">
          {/* Google Satellite Layer using Google Mutant Plugin */}
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            attribution="&copy; Google Maps"
          />

          {/* Heatmap Layer */}
          <Heatmap trafficData={trafficData} />
        </MapContainer>
      </div>

      {/* Information Section */}
      <div className="mt-4 text-sm text-center text-gray-600">
        <p>അഭിമുഖം ഓരോ 5 സെക്കൻഡ് ഇടവേളയ്ക്കും പുതുക്കുന്നു, ഇത് നേരിട്ടുള്ള സന്ദർശക ട്രാഫിക് ഡൻസിറ്റിയെ പ്രതിഫലിപ്പിക്കുന്നു.</p>
        <p>ഹീട്മാപ്പ് ഉയർന്ന ഡൻസിറ്റിയുള്ള പ്രദേശങ്ങളെ (കിറുമാണ് ഉയർന്ന ട്രാഫിക്, പച്ച അവശിഷ്ടമായ ട്രാഫിക്) കാണിക്കുന്നു.</p>
      </div>
    </div>
  );
};

export default TrafficDensityMapMl;
