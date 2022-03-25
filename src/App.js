import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MapContext } from "./components/MapContext";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

function App() {
  const [chosenPlaces, setChosenPlaces] = useState([]);
  const [morePlaces, setMorePlaces] = useState([]);
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [distance, setDistance] = useState("");

  return (
    <MapContext.Provider
      value={{
        morePlaces,
        setMorePlaces,
        chosenPlaces,
        setChosenPlaces,
        userLocation,
        setUserLocation,
        distance,
        setDistance,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/map" element={<MapScreen />} />
        </Routes>
      </Router>
    </MapContext.Provider>
  );
}

export default App;
