import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { cars } from "./FetuaredSection";
import CarCard from "./CarCard";

const Cars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const cars = await res.json();
  console.log(cars);
  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <h1 className="text-3xl font-bold">All Available Cars</h1>
        <p className="font-semibold">
          Brows our selection of premium vehicles available for your next
          adventure
        </p>
        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <FaSearch className="w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Search by model..."
            className="w-full h-full outline-none text-gray-500 ml-5"
          />
          <CiFilter className="w-5 h-5 ml-3" />
        </div>
      </div>
      <div className=" px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="max-w-300 mx-auto text-2xl font-bold">
          Total Cars :{cars.length}
        </p>
        <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {cars.map((car, i) => (
            <CarCard key={i} car={car}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
