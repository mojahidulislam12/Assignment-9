import Image from "next/image";
import React from "react";
import image from "@/assets/banner_car_image.png";
const ActionSection = () => {
  return (
    <div className="max-w-300 mx-auto flex flex-col md:flex-row md:items-start items-center justify-between px-8 `min-md:pl-14` pt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-700  rounded-2xl overflow-hidden mt-10">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do You Own a Luxury Car?</h2>
        <p className="mt-2">
          Monetize your vehicle effortlessly by listing it on CarRental
        </p>
        <p className="max-w-130">
          We take care of insurance, driver verification and secure payments so
          you can earn passive income,stress-free
        </p>
        <button className="btn px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer ">
          List Your Car
        </button>
      </div>
      <Image src={image} height={180} className="mt-10" alt=""></Image>
    </div>
  );
};

export default ActionSection;
