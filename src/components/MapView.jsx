import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
  const position = [7.3775, 3.9470]; // Ibadan coords

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          📍 You are here
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
