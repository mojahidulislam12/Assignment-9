import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      address: "Barcelona, Spain",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      rating: 5,
      review:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },
    {
      id: 2,
      name: "Liam Johnson",
      address: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      rating: 4,
      review:
        "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
    },
    {
      id: 3,
      name: "Sophia Lee",
      address: "Seoul, South Korea",
      image:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
      rating: 5,
      review:
        "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results.",
    },
  ];
  return (
    <div>
      <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-[40px] font-bold">
            What Our Customer Say
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">
            Discover why discerning travelers choose StayVenture for luxury
            accommodations around the world.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow  w-95"
            >
              <div className="flex items-center gap-3">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-playfair text-xl">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} filled={testimonial.rating > index} />
                  ))}
              </div>
              <p className="text-gray-500 max-w-90 mt-4">
                `{testimonial.review}`
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
