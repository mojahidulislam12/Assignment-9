import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import BookingCancle from "./BookingCancle";
import BookingEdit from "./BookingEdit";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  const { id } = user;
  console.log(session);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  console.log(data._id);

  return (
    <div className="mxa-w-300 mx-auto mt-10">
      <div className="lg:px-24 xl:px-32 2xl:px-48  text-sm max-w-7xl">
        <h1 className="font-bold text-2xl ml-4 md:ml-0">
          My Booking cars:{" "}
          <span className="ml-2 text-2xl font-semibold text-green-500">
            {data.length}
          </span>
        </h1>
        <p className="ml-4 md:ml-0">View and manage your all car booking</p>
        <div className="px-6 md:px-0 mt-10">
          {data.map((booking, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 border border-borderColor rounded-lg mt-5 first:mt-12"
            >
              <div className="md:col-span-1">
                <div className="rounded-md overflow-hidden mb-3">
                  <Image
                    src={booking?.carImage}
                    width={200}
                    height={200}
                    alt=""
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
                <p className="text-lg font-medium mt-2">
                  {booking?.carBrand} {booking?.carVersion}
                </p>
                <p className="text-gray-500">
                  {booking?.carYer} . {booking?.carCategory} .{" "}
                  {booking?.location}
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                  <p className="px-3 py-1.5 bg-light rounded">
                    Booking # {i + 1}
                  </p>
                  <p
                    className={`px-3 py-1 text-xs rounded-full ${booking?.status === "confirmed" ? "bg-green-400/15 text-green-600" : "bg-red-400/15 text-red-600"}`}
                  >
                    {booking?.carIsAvailable}
                  </p>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <SlCalender className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-gray-500">Rental Period</p>
                    <p>
                      {booking?.pickupDate} to {booking?.returnDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <IoLocation className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-gray-500">PickUp location</p>
                    <p>{booking?.location}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col justify-between gap-2">
                <div className="text-sm text-gray-500 text-right">
                  <p>Per Day Price</p>
                  <h1 className="text-2xl font-semibold text-primary">
                    $ {booking?.carPrice}
                  </h1>
                </div>
                <div className="flex gap-2 mr-10">
                  <BookingEdit booking={booking}></BookingEdit>
                  <BookingCancle bookingId={booking._id}></BookingCancle>
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
