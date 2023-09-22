"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const GoogleMapContainer = ({ latitude, longitude, setCustomValue, detailPage = false }: GoogleMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const onMarkerDragEnd = (e: any) => {
    const curentMarker = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setUserLocation(curentMarker);
    if (detailPage) {
      return;
    }
    setCustomValue!("latitude", curentMarker.lat);
    setCustomValue!("longitude", curentMarker.lng);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation} zoom={17}>
        <Marker position={userLocation} draggable={true} onDragEnd={onMarkerDragEnd} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapContainer;
