// Importing Packages
import L from "leaflet";
import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

export default function GeoCoding({ Coords }) {
  const [coords, setCoords] = useState(0);
  const map = useMap();

  // To add search icon
  useEffect(() => {
    map.addControl(searchControl);
  }, []);
  const myprovider = new OpenStreetMapProvider();
  const searchControl = new GeoSearchControl({
    provider: myprovider,
    showMarker: false,
  });

  const results = new L.LayerGroup().addTo(map);
  map.on("geosearch/showlocation", function (data) {
    setCoords(data.marker._latlng);
    results.clearLayers();
  });
  return null;
}
