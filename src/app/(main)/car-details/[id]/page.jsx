import CarDetails from "@/components/HomePage/CarDetails";
import CardetailsCard from "@/components/HomePage/CardetailsCard";
import { cars } from "@/components/HomePage/FetuaredSection";
import React from "react";

const CarDEtails = async ({ params }) => {
  const { id } = await params;
  const data = cars;

  const car = data.find((item) => item.id === parseInt(id));

  return (
    <div>
      <div>
        <CardetailsCard car={car}></CardetailsCard>
      </div>
    </div>
  );
};

export default CarDEtails;
