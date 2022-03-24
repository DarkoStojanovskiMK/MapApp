import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { places } from "../data";

const CheckCategories = ({ name, idx, setChosenPlaces, chosenPlaces }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setChosenPlaces([...chosenPlaces, places[idx]]);
    } else {
      const filteredPlaces = chosenPlaces.filter(
        (place) => place !== places[idx]
      );

      setChosenPlaces(filteredPlaces);
    }
  }, [isChecked]);

  return (
    <ListGroup.Item className="list-item">
      <div>{name}</div>
      <div
        name={name}
        className={isChecked ? "inputFull" : "inputEmpty"}
        onClick={() => setIsChecked(!isChecked)}
      />
    </ListGroup.Item>
  );
};

export default CheckCategories;
