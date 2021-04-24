// Importing Packages
import { useMap } from "react-leaflet";
import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaRoute } from "react-icons/fa";
import Style from "../Routing/routing.module.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "./routing.module.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.js";

let CoordsArray = [];

function Routing(props) {
  const map = useMap();

  const [RoutingElement, SetRoutingElement] = useState(null);

  // Adding coordinates to array
  useEffect(() => {
    CoordsArray.push(new L.latLng(props.Coords));
  }, [props.Coords]);

  // Routing
  const HandleRountingClick = () => {
    if (CoordsArray.length > 1) {
      var route = L.Routing.control({
        createMarker: function (i, wp, n) {
          i++;
          return false;
        },
        waypoints: CoordsArray,
        routeWhileDragging: true,
        draggableWaypoints: true,
        addWaypoints: true,
        collapsible: true,
        autoRoute: true,

        show: true,
      }).addTo(map);

      SetRoutingElement(route);
      CoordsArray = [];
    }
  };

  return (
    <>
      <FaRoute className={Style.RoutingIcon} onClick={HandleRountingClick} />

      <AiFillCloseCircle
        className={Style.CloseIcon}
        onClick={() =>
          RoutingElement ? map.removeControl(RoutingElement) : null
        }
      />
    </>
  );
}

export default Routing;
