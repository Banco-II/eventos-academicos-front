import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { ContainerMap } from "./style";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -6.888463202449027,
  lng: -38.558930105104125,
};

export default function CreateMap() {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (e) => {
    setMarkerPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATNeUM7feB5kgq-MQlioYJO83sQOx1OY4",
  });

  return (
    <ContainerMap>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={handleMapClick}
        >
          {markerPosition && <Marker position={markerPosition} cursor="pointer" />}
        </GoogleMap>
      ) : (
        <>Loading...</>
      )}
    </ContainerMap>
  );
}
