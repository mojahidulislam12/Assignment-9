import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCarSide, FaRegUser } from "react-icons/fa";

import { IoMdArrowRoundBack } from "react-icons/io";
import { LuFuel } from "react-icons/lu";

const CardetailsCard = ({ car }) => {
  console.log(car);

  return (
    <div className="">
      <div className="max-w-300 mx-auto   mt-16">
        <button className="btn flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
          Back to all cars{" "}
          <IoMdArrowRoundBack className="rotate-180 opacity-65" />
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Image
              src={car.img}
              width={100}
              height={100}
              alt=""
              className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
            ></Image>
            <div className="space-x-6">
              <div>
                <h1 className="text-3xl font-bold">
                  {car.brand} {car.version}
                </h1>
                <p className="text-gray-500 text-lg ">
                  {car.category}. {car.year}
                </p>
              </div>
              <hr className="border-borderColor my-6" />
              <div className=" grid grid-cols-2 sm:grid-cols-4 text-gray-600 gap-y-2">
                <div className="btn flex items-center text-sm text-muted">
                  <FaRegUser className="h-4 mr-2" />
                  <span>{car.seats}</span>
                </div>
                <div className="btn flex items-center text-sm text-muted">
                  <LuFuel className="h-4 mr-2" />
                  <span>{car.fuelType}</span>
                </div>
                <div className=" btn flex items-center text-sm text-muted">
                  <FaCarSide className="h-4 mr-2" />
                  <span>{car.transmission}</span>
                </div>
                <div className="btn flex items-center text-sm text-muted">
                  <CiLocationOn className="h-4 mr-2" />
                  <span>{car.location}</span>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-medium mb-3">Description</h1>
                <p className="text-gray-500">{car.description}</p>
              </div>
            </div>
          </div>
          <form className="shadow-lg h-max sticky top-18 rounded-xl p-6 text-gray-500">
            <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
              ${car.price}
              <span>per day</span>
            </p>
            <hr className="border-borderColor my-6" />
            <div className="flex flex-col gap-2">
              <label htmlFor="">PickUp Date</label>
              <input
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Return Date</label>
              <input
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg"
              />
            </div>
            <button className="btn mt-8 w-full text-center">Booking Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardetailsCard;
