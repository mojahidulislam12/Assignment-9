"use client";
import { authClient } from "@/lib/auth-client";
import { Label, ListBox, Select } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";

const BookingCard = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const handleBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      carId: car._id,
      carName: car.name,
      carImage: car.img,
      carPrice: car.price,
      carBrand: car.brand,
      carVersion: car.version,
      carYer: car.year,
      carCategory: car.category,
      carIsAvailable: car.isAvailable,
      driverNeeded: formData.get("driverNeeded"),
      pickupDate: formData.get("pickupDate"),
      returnDate: formData.get("returnDate"),
      location: formData.get("location"),
    };
    console.log(bookingData);
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success(`Booking Successful`);
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleBooking}
        className="shadow-lg h-max sticky top-18 rounded-xl p-6 text-gray-500"
      >
        <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
          ${car?.price}
          <span>per day</span>
        </p>
        <hr className="border-borderColor my-6" />
        <div>
          <Select
            name="driverNeeded"
            isRequired
            className="w-full"
            placeholder="Status"
          >
            <Label>Driver Needed</Label>
            <Select.Trigger className="rounded-md">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Yes" textValue="Yes">
                  Yes
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="No" textValue="No">
                  No
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Booking Location</label>
          <input
            name="location"
            type="text"
            className="border border-borderColor px-3 py-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">PickUp Date</label>
          <input
            name="pickupDate"
            type="date"
            className="border border-borderColor px-3 py-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Return Date</label>
          <input
            name="returnDate"
            type="date"
            className="border border-borderColor px-3 py-2 rounded-lg"
          />
        </div>
        <button className="btn mt-8 w-full text-center">Booking Now</button>
      </form>
    </div>
  );
};

export default BookingCard;
