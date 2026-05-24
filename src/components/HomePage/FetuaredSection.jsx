import React from "react";
import CarCard from "./CarCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const FetuaredSection = async () => {
  const res = await fetch("http://localhost:5000/car");
  const cars = await res.json();
  //console.log(cars);
  return (
    <div className="max-w-300 mx-auto ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-semibold text-4xl md:text-10">
            Featured Vehicles
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">
            Explore our selection of premium Vehicles available for your next
            adventure..
          </p>
        </div>
        <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-18">
          {cars.slice(0, 6).map((car, i) => (
            <CarCard key={i} car={car}></CarCard>
          ))}
        </div>

        <button className="btn px-6 py-2 hover:bg-primary hover:text-white rounded-md mt-18 cursor-pointer">
          Explore All Cars <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default FetuaredSection;
