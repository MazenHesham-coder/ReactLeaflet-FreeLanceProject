// Impoing packages
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-routing-machine";
import Geocoding from "../GeoCoding/GeoCoding";
import CurrentLocation from "../MyLocation/MyLocation";
import Editing from "../EditComponent/EditComponent";
import "../../../node_modules/leaflet-draw/dist/leaflet.draw.css";
import "../../../node_modules/leaflet-geosearch/dist/geosearch.css";
import Style from "./map.module.css";

const defaultCenter = [27, 30];
const defaultZoom = 6;

function Map() {
  return (
    <div>

      {/* To add map container */}
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={true}
      >
        {/* To add default basemap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        />

        <Editing />
        <CurrentLocation />
        <Geocoding />
      </MapContainer>

      <div className={Style.DataDiv}></div>
    </div>
  );
}

export default Map;
