import React from "react";
import CarCard from "./CarCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export const cars = [
  {
    id: 1,
    brand: "Toyota",
    category: "Sedan",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Japan",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    name: "Toyota Corolla",
    version: "2024 XSE",
    seats: 5,
    price: 25000,
    isAvailable: true,
  },
  {
    id: 2,
    brand: "Honda",
    category: "Sedan",
    year: 2023,
    fuelType: "Petrol",
    transmission: "Manual",
    location: "Japan",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    name: "Honda Civic",
    version: "2023 Sport",
    seats: 5,
    price: 27000,
    isAvailable: false,
  },
  {
    id: 3,
    brand: "BMW",
    category: "SUV",
    year: 2024,
    fuelType: "Diesel",
    transmission: "Automatic",
    location: "Germany",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    name: "BMW X5",
    version: "2024 M Package",
    seats: 7,
    price: 65000,
    isAvailable: true,
  },
  {
    id: 4,
    brand: "Mercedes Benz",
    category: "Luxury Sedan",
    year: 2023,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Germany",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    name: "Mercedes Benz C-Class",
    version: "2023 AMG",
    seats: 5,
    price: 58000,
    isAvailable: true,
  },
  {
    id: 5,
    brand: "Audi",
    category: "Luxury Sedan",
    year: 2024,
    fuelType: "Hybrid",
    transmission: "Automatic",
    location: "Germany",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    name: "Audi A6",
    version: "2024 Premium",
    seats: 5,
    price: 62000,
    isAvailable: false,
  },
  {
    id: 6,
    brand: "Tesla",
    category: "Electric",
    year: 2024,
    fuelType: "Electric",
    transmission: "Automatic",
    location: "USA",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    name: "Tesla Model 3",
    version: "2024 Long Range",
    seats: 5,
    price: 47000,
    isAvailable: true,
  },
  {
    id: 7,
    brand: "Ford",
    category: "Sports",
    year: 2023,
    fuelType: "Petrol",
    transmission: "Manual",
    location: "USA",
    img: "https://images.unsplash.com/photo-1494905998402-395d579af36f",
    name: "Ford Mustang",
    version: "2023 GT",
    seats: 4,
    price: 55000,
    isAvailable: false,
  },
  {
    id: 8,
    brand: "Hyundai",
    category: "SUV",
    year: 2024,
    fuelType: "Hybrid",
    transmission: "Automatic",
    location: "South Korea",
    img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
    name: "Hyundai Tucson",
    version: "2024 Hybrid",
    seats: 5,
    price: 32000,
    isAvailable: true,
  },
  {
    id: 9,
    brand: "Kia",
    category: "SUV",
    year: 2023,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "South Korea",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    name: "Kia Sportage",
    version: "2023 EX",
    seats: 5,
    price: 30000,
    isAvailable: true,
  },
  {
    id: 10,
    brand: "Range Rover",
    category: "Luxury SUV",
    year: 2024,
    fuelType: "Diesel",
    transmission: "Automatic",
    location: "United Kingdom",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    name: "Range Rover Evoque",
    version: "2024 Dynamic",
    seats: 5,
    price: 72000,
    isAvailable: false,
  },
];
const FetuaredSection = () => {
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
