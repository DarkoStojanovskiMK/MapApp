import React from "react";

const Marker = ({ name, image }) => {
  return (
    <div>
      <img className="image" src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Marker;
