// Importing Packages
import "./App.css";
import { useMap, FeatureGroup } from "react-leaflet";
import React, { useState } from "react";
import { EditControl } from "react-leaflet-draw";
import "./basemapStyle.css";
import Routing from "../Routing/routing";
import L from "leaflet";

// Variables decleration
let basemapToggler = 1;

export default function EditComponent() {
  const map = useMap();
  const [pointList, setPointList] = useState([]);

  // basemap switcher function
  const basemapSwitch = (e) => {
    if (basemapToggler === 1) {
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        }
      ).addTo(map);
      basemapToggler = 2;
      e.target.className = "basemapSwitcher2";
    } else if (basemapToggler === 2) {
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
      }).addTo(map);

      basemapToggler = 1;
      e.target.className = "basemapSwitcher";
    }
  };

  // Adding new point to the array
    const _onCreate = (e) => {
    const arry = [...pointList, e.layer._latlng];
    setPointList(arry);
    return 0;
  };

  return (
    <div>
      <FeatureGroup>
        <EditControl
          position="topleft"
          onCreated={_onCreate}
          draw={{
            rectangle: false,
            polyline: false,
            polygon: false,
            circle: false,
            circlemarker: false,
          }}
        />
      </FeatureGroup>

      {pointList.map((coord) => (
        <Routing Coords={coord} />
      ))}

      <div className="basemapSwitcher" onClick={basemapSwitch}></div>
    </div>
  );
}
