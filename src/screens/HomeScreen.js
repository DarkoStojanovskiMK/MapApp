import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Button, Card, Form } from "react-bootstrap";
import CheckCategories from "../components/CheckCategories";
import Map from "../components/Map";
import { dataCategories } from "../data";
import { MapContext } from "../components/MapContext";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { setMorePlaces, chosenPlaces, setChosenPlaces, setUserLocation } =
    useContext(MapContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setUserLocation({
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    let dataPlaces = [];
    dataPlaces = chosenPlaces.map((place) => place.data);
    setMorePlaces(dataPlaces.flat());
  }, [chosenPlaces]);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/map");
  };

  return (
    <Container style={{ maxWidth: "700px", height: "100vh" }}>
      <Row>
        <Map height="30vh" />
      </Row>
      <Row>
        <Card className="custom-card">
          <Form onSubmit={handleSubmit}>
            <Card.Body variant="flush" className="custom-body">
              <Card.Title>Choose Your Categories</Card.Title>
              {dataCategories.map((item, index) => (
                <div key={index}>
                  <CheckCategories
                    name={item}
                    idx={index}
                    chosenPlaces={chosenPlaces}
                    setChosenPlaces={setChosenPlaces}
                  />
                </div>
              ))}
            </Card.Body>
            <Button
              style={{ width: "94%" }}
              className="custom-btn"
              type="submit"
            >
              Continue
              <div className="add">
                {chosenPlaces ? chosenPlaces.length : 0}
              </div>
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default HomeScreen;
