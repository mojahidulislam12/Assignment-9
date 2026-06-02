"use client";

import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddCar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const carsData = Object.fromEntries(formData.entries());

    const carData = {
      userId: user?.id,
      ...carsData,
      price: Number(carsData.price),
      seats: Number(carsData.seats),
      year: Number(carsData.year),
      isAvailable: carsData.isAvailable === "true",
      userEmail: user?.email,
      userName: user?.name,
      userImage: user?.image,
    };

    console.log(carData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    const data = await res.json();

    console.log(data);
    if (data) {
      toast.success("Successfully Added");
      redirect("/my-added-car");
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="max-w-300 mx-auto py-8 ">
        <h1 className="text-xl font-bold">Add Car</h1>

        <Card className="p-6 max-w-280 mx-auto mt-10">
          <form onSubmit={onsubmit} className="space-y-8 mt-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TextField name="name" isRequired>
                <Label>Car Name</Label>
                <Input placeholder="Car name..." />
                <FieldError />
              </TextField>

              <TextField name="price" isRequired>
                <Label>Daily Rent Price</Label>
                <Input type="number" placeholder="Price.." />
                <FieldError />
              </TextField>

              <TextField name="seats" isRequired>
                <Label>Seat Capacity</Label>
                <Input type="number" placeholder="Seat..." />
                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Label>Car Type</Label>

                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Car Type"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="SUV">SUV</ListBox.Item>
                      <ListBox.Item id="Sedan">Sedan</ListBox.Item>
                      <ListBox.Item id="Hatchback">Hatchback</ListBox.Item>
                      <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="img" isRequired>
                  <Label>Image URL</Label>
                  <Input type="url" placeholder="https://example.com/car.jpg" />
                  <FieldError />
                </TextField>
              </div>

              <TextField name="location" isRequired>
                <Label>PickUp Location</Label>
                <Input placeholder="Location..." />
                <FieldError />
              </TextField>

              <TextField name="brand" isRequired>
                <Label>Brand</Label>
                <Input placeholder="Brand..." />
                <FieldError />
              </TextField>

              <TextField name="year" isRequired>
                <Label>Year</Label>
                <Input type="number" placeholder="Year..." />
                <FieldError />
              </TextField>

              <TextField name="version" isRequired>
                <Label>Version</Label>
                <Input type="text" placeholder="2024 XSE" />
                <FieldError />
              </TextField>

              {/* Transmission */}
              <div>
                <Label>Transmission</Label>

                <Select
                  name="transmission"
                  isRequired
                  className="w-full"
                  placeholder="Transmission"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Automatic">Automatic</ListBox.Item>
                      <ListBox.Item id="Manual">Manual</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Fuel */}
              <div>
                <Label>Fuel Type</Label>

                <Select
                  name="fuelType"
                  isRequired
                  className="w-full"
                  placeholder="Fuel Type"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Petrol">Petrol</ListBox.Item>
                      <ListBox.Item id="Hybrid">Hybrid</ListBox.Item>
                      <ListBox.Item id="Diesel">Diesel</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Status */}
              <div>
                <Label>Status</Label>

                <Select
                  name="isAvailable"
                  isRequired
                  className="w-full"
                  placeholder="Status"
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="true">true</ListBox.Item>
                      <ListBox.Item id="false">false</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>

                  <TextArea placeholder="Describe the car..." />

                  <FieldError />
                </TextField>
              </div>
            </div>
            <div>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" className="w-full bg-cyan-500 text-white">
                Add Car
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCar;
