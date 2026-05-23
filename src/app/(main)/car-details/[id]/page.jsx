import CardetailsCard from "@/components/HomePage/CardetailsCard";
import { cars } from "@/components/HomePage/FetuaredSection";
import React from "react";

const CarDEtails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/car/${id}`);
  const car = await res.json();
  console.log(car);

  return (
    <div>
      <div>
        <CardetailsCard car={car}></CardetailsCard>
      </div>
    </div>
  );
};

export default CarDEtails;
