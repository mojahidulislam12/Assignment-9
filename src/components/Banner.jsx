"use client";
import Image from "next/image";
import React, { useState } from "react";
import BannerImg from "@/assets/main_car.png";
const Banner = () => {
  const cityList = [
    { city: "Dhaka" },
    { city: "Chittagong" },
    { city: "Khulna" },
    { city: "Rajshahi" },
    { city: "Sylhet" },
    { city: "Barisal" },
  ];
  const [location, setLocation] = useState("");
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
      <h1 className="text-4xl md:text-5xl font-semibold">Cars on rent NOW !</h1>
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city, i) => (
                <option key={i}>{city.city}</option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {location ? location : "Please Select location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              id="return-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer">
          Search
        </button>
      </form>
      <Image src={BannerImg} alt="car" height={296} />
    </div>
  );
};

export default Banner;
