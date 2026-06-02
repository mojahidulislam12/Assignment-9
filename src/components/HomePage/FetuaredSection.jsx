import React from "react";
import CarCard from "./CarCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const FetuaredSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const cars = await res.json();
  //console.log(cars);
  return (
    <div className="max-w-300 mx-auto py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center text-center relative">
          <h1 className="font-semibold text-4xl md:text-5xl text-gray-900">
            Drive Your Dream Car Today
          </h1>

          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl">
            Choose from premium, luxury, and budget-friendly cars. Book
            instantly and start your journey without hassle.
          </p>
        </div>
        <div className="px-6 md:px-0">
          <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-18">
            {cars.slice(0, 6).map((car, i) => (
              <CarCard key={i} car={car}></CarCard>
            ))}
          </div>
        </div>
        <Link href="/explore-cars">
          <button className="btn px-6 py-2 hover:bg-primary hover:text-white rounded-md mt-18 cursor-pointer">
            Explore All Cars <FaArrowRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FetuaredSection;
