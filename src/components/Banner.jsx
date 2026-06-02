"use client";

import Image from "next/image";
import React, { useState } from "react";
import BannerImg from "@/assets/main_car.png";

import Link from "next/link";

const Banner = () => {
  // const cityList = [
  //   { city: "Dhaka" },
  //   { city: "Chittagong" },
  //   { city: "Khulna" },
  //   { city: "Rajshahi" },
  //   { city: "Sylhet" },
  //   { city: "Barisal" },
  // ];

  const [location, setLocation] = useState("");

  return (
    <section className="min-h-screen bg-light flex items-center justify-center px-6 py-16 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Side Content */}
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Find & Rent Your Dream Car Easily
            </h1>

            <p className="text-gray-600 text-lg leading-8 max-w-xl">
              Choose from a wide range of premium and budget-friendly cars
              available for rent across Bangladesh. Fast booking, affordable
              prices, and smooth driving experience.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/explore-cars">
                {" "}
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                  Explore Cars
                </button>
              </Link>
            </div>
          </div>

          {/* Form */}
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-all duration-500"></div>

            <Image
              src={BannerImg}
              alt="car"
              className="relative z-10 drop-shadow-[0px_25px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
