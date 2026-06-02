import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaCarSide, FaRegUser } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";

const CarCard = ({ car }) => {
  console.log(car);
  return (
    <div className="max-w-90 group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car?.img}
          width={357}
          height={150}
          alt=""
          className="w-ful h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car?.isAvailable && (
          <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
            Available Now
          </p>
        )}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
          <span className="font-semibold"> ${car?.price}</span>
          <span className="text-sm text-white/80"> / day</span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium">
              {car?.brand} {car?.version}
            </h3>
            <p className="text-segment-foreground text-sm">
              {car?.category} . {car?.year}
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 text-gray-600 gap-y-2">
          <div className="flex items-center text-sm text-muted">
            <FaRegUser className="h-4 mr-2" />
            <span>{car?.seats}</span>
          </div>
          <div className="flex items-center text-sm text-muted">
            <LuFuel className="h-4 mr-2" />
            <span>{car?.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-muted">
            <FaCarSide className="h-4 mr-2" />
            <span>{car?.transmission}</span>
          </div>
          <div className="flex items-center text-sm text-muted">
            <CiLocationOn className="h-4 mr-2" />
            <span>{car?.location}</span>
          </div>
        </div>
      </div>
      <div className="text-center pb-4">
        <Link href={`car-details/${car?._id}`}>
          <button className="btn">
            View Details <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
