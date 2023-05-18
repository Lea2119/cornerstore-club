import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/Map.css";

const Map = () => {
  const markers = [
    {
      geocode: [48.8566, 2.3522],
      popup: "Hello, I'm a popup",
    },
    {
      geocode: [48.8366, 2.3522],
      popup: "Hello, I'm a popup",
    },
  ];
  return (
    <div className="map">
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution="openstreetmap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
