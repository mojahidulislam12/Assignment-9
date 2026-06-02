import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

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
        "I am truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
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
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-16 lg:px-24 xl:px-40">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Trusted by Thousands of Happy Travelers
        </h1>

        <p className="text-gray-500 mt-4 text-sm md:text-base leading-7">
          Hear real stories from guests who enjoyed seamless booking, premium
          comfort, and unforgettable experiences with StayVenture.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full object-cover border-2 border-blue-100"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-5 text-yellow-400">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-7 mt-5 text-sm md:text-base">
              “{testimonial.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
