import React, { useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { ListGroup } from "react-bootstrap";
import { MapContext } from "../components/MapContext";
import Marker from "./Marker";
import { getDistance } from "geolib";

const Map = ({ height }) => {
  const defaultProps = {
    center: {
      lat: 41.9981,
      lng: 21.4254,
    },
    zoom: 11,
  };
  const { morePlaces, setMorePlaces, userLocation, distance, chosenPlaces } =
    useContext(MapContext);

  useEffect(() => {
    if (distance === "filter") {
      const filteredPlaces = morePlaces.filter((place) => {
        const dst = getDistance(
          {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          },
          { latitude: place.lat, longitude: place.lng }
        );

        if (dst < 3000) {
          return place;
        }
      });
      setMorePlaces(filteredPlaces);
    }
    if (distance === "non filter") {
      let dataPlaces = [];
      dataPlaces = chosenPlaces.map((place) => place.data);
      setMorePlaces(dataPlaces.flat());
    }
  }, [distance]);

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
        <Marker
          lat={userLocation.latitude}
          lng={userLocation.longitude}
          image="\pictures\Location_dot_blue.svg"
          name=" "
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
