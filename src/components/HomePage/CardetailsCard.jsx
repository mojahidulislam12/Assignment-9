import React from "react";
import { cars } from "./FetuaredSection";

const CardetailsCard = ({ car }) => {
  console.log(car);

  return <div>{car.name}</div>;
};

export default CardetailsCard;
