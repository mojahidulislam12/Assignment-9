import CardetailsCard from "@/components/HomePage/CardetailsCard";
import { cars } from "@/components/HomePage/FetuaredSection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const CarDEtails = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  console.log(id);
  const res = await fetch(`http://localhost:5000/car/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
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
