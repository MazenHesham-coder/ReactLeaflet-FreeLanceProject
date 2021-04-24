import L from "leaflet";
import React from "react";
import "leaflet-control-geocoder";
import { useMap } from "react-leaflet";
import "./ReverseGeocoding.module.css";

// Reverse geocoding function
export default function ReverseGeoCoding({ Coords }) {
  const map = useMap();
  const geocoder = new L.Control.Geocoder.Nominatim();
  geocoder.reverse(Coords, map.options.crs.scale(map.getZoom()), (result) => {
    Address = result[0].name;
  });

  return <div>{Address}</div>;
}
