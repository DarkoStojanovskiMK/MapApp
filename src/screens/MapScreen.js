import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Button, ButtonGroup } from "react-bootstrap";
import Map from "../components/Map";

const MapScreen = () => {
  const navigate = useNavigate();
  const goBack = () => {
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
            <i className="bi bi-arrow-90deg-left"></i>
          </Button>
          <Button className="btnSolo">
            <i className="bi bi-arrow-90deg-up"></i>
          </Button>
          <Button className="btnSolo">
            <i className="bi bi-arrow-90deg-right"></i>
          </Button>
          <Button className="btnSolo">
            <i className="bi bi-arrow-90deg-down"></i>
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default MapScreen;
