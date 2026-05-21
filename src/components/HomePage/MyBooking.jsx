"use client";
import React, { useEffect, useState } from "react";
import { cars } from "./FetuaredSection";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const fetchMyBookings = async () => {
    setBookings(cars);
  };
  useEffect(() => {
    fetchMyBookings();
  }, []);
  console.log(bookings);
  return (
    <div className="mxa-w-300 mx-auto">
      <div className="px-0 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
        <h1 className="font-bold text-2xl">My Booking</h1>
        <p>View and manage your all car booking</p>
        <div>
          {bookings.map((booking, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
            >
              <div className="md:col-span-1">
                <div className="rounded-md overflow-hidden mb-3">
                  <Image
                    src={booking.img}
                    width={200}
                    height={200}
                    alt=""
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
                <p className="text-lg font-medium mt-2">
                  {booking.brand} {booking.version}
                </p>
                <p className="text-gray-500">
                  {booking.year} . {booking.category} . {booking.location}
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                  <p className="px-3 py-1.5 bg-light rounded">
                    Booking # {i + 1}
                  </p>
                  <p
                    className={`px-3 py-1 text-xs rounded-full ${booking.status === "confirmed" ? "bg-green-400/15 text-green-600" : "bg-red-400/15 text-red-600"}`}
                  >
                    {booking.status}
                  </p>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <SlCalender className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-gray-500">Rental Period</p>
                    <p></p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <IoLocation className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-gray-500">PickUp location</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col justify-between gap-2">
                <div className="text-sm text-gray-500 text-right">
                  <p>Total Price</p>
                  <h1></h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
