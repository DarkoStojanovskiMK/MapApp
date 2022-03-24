import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { ListGroup } from "react-bootstrap";
import { MapContext } from "../components/MapContext";
import Marker from "./Marker";

const Map = ({ height }) => {
  const defaultProps = {
    center: {
      lat: 41.9981,
      lng: 21.4254,
    },
    zoom: 11,
  };
  const { morePlaces } = useContext(MapContext);

  return (
    <div
      style={{
        height: height,
        width: "100%",
        padding: "0",
        marginTop: "0.5rem",
        position: "relative",
      }}
    >
      <ListGroup.Item className="weather">
        <div>Welcome to Skopje</div>
      </ListGroup.Item>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "EMPTY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {morePlaces.length > 0 &&
          morePlaces.map((place, index) => {
            return (
              <Marker
                key={index}
                name={place.name}
                image={place.image}
                lat={place.lat}
                lng={place.lng}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
