"use client";
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
import React from "react";
import { toast } from "react-toastify";

const addCar = () => {
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());
    console.log(carData);
    const res = await fetch("http://localhost:5000/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
    const data = await res.json();
    console.log(data);
    alert("Successfully Added");
  };
  return (
    <div>
      <div className="max-w-300 mx-auto py-8">
        <h1 className="text-xl font-bold">Add Car</h1>
        <Card>
          <form onSubmit={onsubmit} className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}

              <TextField name="name" isRequired>
                <Label>Car Name</Label>
                <Input placeholder="Car name..." className="rounded-md" />
                <FieldError />
              </TextField>
              <TextField name="price" isRequired>
                <Label>Daily Rent Price</Label>
                <Input placeholder="Price.." className="rounded-md" />
                <FieldError />
              </TextField>

              {/* Country */}
              <TextField name="seats" isRequired>
                <Label>Seat Capacity</Label>
                <Input placeholder="Seat..." className="rounded-md" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Car Type"
                >
                  <Label>Car Type</Label>
                  <Select.Trigger className="rounded-md">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="SUV" textValue="SUV">
                        SUV
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Sedan" textValue="Sedan">
                        Sedan
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Hatchback" textValue="Hatchback">
                        Hatchback
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="img" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-md"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Duration */}
              <TextField name="location" isRequired>
                <Label>PickUp Location</Label>
                <Input placeholder="Location..." className="rounded-md" />
                <FieldError />
              </TextField>
              <TextField name="brand" isRequired>
                <Label>Brand</Label>
                <Input placeholder="Brand..." className="rounded-md" />
                <FieldError />
              </TextField>
              <TextField name="year" isRequired>
                <Label>Year</Label>
                <Input placeholder="Year..." className="rounded-md" />
                <FieldError />
              </TextField>
              <TextField name="version" type="date" isRequired>
                <Label>Version</Label>
                <Input type="text" className="rounded-md" />
                <FieldError />
              </TextField>
              <div>
                <Select
                  name="transmission"
                  isRequired
                  className="w-full"
                  placeholder="transmission"
                >
                  <Label>Transmission</Label>
                  <Select.Trigger className="rounded-md">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Automatic" textValue="Automatic">
                        Automatic
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Manual" textValue="Manual">
                        Manual
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              <div>
                <Select
                  name="fuelType"
                  isRequired
                  className="w-full"
                  placeholder="Fuel Type"
                >
                  <Label>Fuel Type</Label>
                  <Select.Trigger className="rounded-md">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Petrol" textValue="Petrol">
                        Petrol
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Hybrid" textValue="Hybrid">
                        Hybrid
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Diesel" textValue="Diesel">
                        Diesel
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div>
                <Select
                  name="isAvailable"
                  isRequired
                  className="w-full"
                  placeholder="Status"
                >
                  <Label>Status</Label>
                  <Select.Trigger className="rounded-md">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="true" textValue="true">
                        true
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="false" textValue="false">
                        false
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-md"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add Car
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default addCar;
