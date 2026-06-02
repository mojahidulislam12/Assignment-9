import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCarSide, FaRegUser } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import MyAddedCarEdit from "./MyAddedCarEdit";
import MyAddedCarDelete from "./MyAddedCarDelete";

const MyAddedCar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const cars = await res.json();
  const data = cars.filter((car) => car.userId === user.id);
  console.log(data);
  return (
    <div className="mxa-w-300 mx-auto">
      <div className="px-0 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
        <h1 className="font-bold text-2xl ml-4 md:ml-0">
          My Adding car:{" "}
          <span className="ml-2 text-2xl font-semibold text-green-500">
            {data.length}
          </span>
        </h1>
        <p className="ml-4 md:ml-0">View and manage your all car adding</p>
      </div>
      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10  px-6 md:px-0">
        {data.map((car, i) => (
          <div
            key={i}
            className="max-w-90 group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
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
            <div className="text-center pb-4 flex justify-center">
              <MyAddedCarEdit car={car}></MyAddedCarEdit>
              <MyAddedCarDelete car={car}></MyAddedCarDelete>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCar;
