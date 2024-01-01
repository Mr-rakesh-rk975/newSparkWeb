import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafletMapComponent = () => {
  const officeLocation = {
    address: "Tara Mata House, near Central Bank, Kasumpti, Shimla, Himachal Pradesh 171009, India",
    lat: 31.1006,
    lng: 77.1734
  };

  const position = [officeLocation.lat, officeLocation.lng];

  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={L.divIcon({ className: 'leaflet-div-icon', html: '<div style="background-color: red; color: white; text-align: center; padding: 5px;">Spark Web Solutions</div>' })}>
        <Popup>
          <div>
            <strong>Spark Web Solutions</strong>
            <br />
            {officeLocation.address}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMapComponent;
