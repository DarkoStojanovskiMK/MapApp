import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Button, ButtonGroup } from "react-bootstrap";
import Map from "../components/Map";
import { MapContext } from "../components/MapContext";

const MapScreen = () => {
  const { setDistance, setChosenPlaces } = useContext(MapContext);
  const navigate = useNavigate();
  const goBack = () => {
    setDistance("");
    setChosenPlaces([]);
    navigate("/");
  };

  return (
    <Container style={{ maxWidth: "700px", height: "100vh" }}>
      <Row>
        <Map height="80vh" />
      </Row>
      <Row>
        <ButtonGroup className="btnGroup">
          <Button className="btnSolo" onClick={goBack}>
            Go Back
          </Button>
          <Button className="btnSolo" onClick={() => setDistance("non filter")}>
            Chosen Categories
          </Button>
          <Button className="btnSolo" onClick={() => setDistance("filter")}>
            3km Radius
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default MapScreen;
