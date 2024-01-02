import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import locationIcon from '../images/SparkWebSol.Location.png';
import '../Map/leaflet.css'

const LeafletMapComponent = ({ theme }) => {
  const officeLocation = {
    address: "Tara Mata House, near Central Bank, Kasumpti, Shimla, Himachal Pradesh 171009, India",
    lat: 31.07473,
    lng: 77.1831,
  };

  const position = [officeLocation.lat, officeLocation.lng];

  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        icon={L.divIcon({
          className: 'leaflet-div-icon',
          html: `
            <div style="  background-color: transparent !important; border: none !important; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <span style="background-image: url(${locationIcon}); background-size: cover; width: 70px; height: 70px;"></span>
              <h2 style="margin: 0; color: red; font-size: 15px; font-weight: 800; text-wrap: nowrap;">Spark Web Solutions</h2>
            </div>
          `,
        })}
      >
        <Popup>
          <div>
            <h1  style={{ color: theme === 'light' ? 'rgb(242, 75, 116) ' : "rgb(30, 124, 192)" }}>Spark Web Solutions</h1>
            <br />
            {officeLocation.address}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMapComponent;
