// Importing packages
import React from "react";
import { BiCurrentLocation } from "../../../node_modules/react-icons/bi";
import { useMap } from "react-leaflet";
import style from "./MyLocation.module.css";

export default function MyLocation() {
  const map = useMap();
  //To get user's location
  function HandelMyLocation() {
    navigator.geolocation.getCurrentPosition((e) => {
      const lat = e.coords.latitude;
      const lon = e.coords.longitude;
      map.flyTo([lat, lon], 13);
      map.center = [lat, lon];
    });
  }
  return (
    <BiCurrentLocation className={style.icon} onClick={HandelMyLocation} />
  );
}
