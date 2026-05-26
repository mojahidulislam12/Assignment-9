// "use client";
// import { authClient } from "@/lib/auth-client";
// import {
//   FieldError,
//   Input,
//   Label,
//   TextField,
//   Select,
//   ListBox,
//   TextArea,
//   Button,
//   Card,
// } from "@heroui/react";
// import React from "react";
// import { toast } from "react-toastify";

// const addCar = () => {
//   const { data: session } = authClient.useSession();

//   const user = session?.user;
//   console.log(user);

//   const onsubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const carsData = Object.fromEntries(formData.entries());
//     console.log(carData);
//     const carData = {

//     }
//     const res = await fetch("http://localhost:5000/car", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(carData),
//     });
//     const data = await res.json();
//     console.log(data);
//     toast.success("Successfully Added");
//   };
//   return (
//     <div>
//       <div className="max-w-300 mx-auto py-8">
//         <h1 className="text-xl font-bold">Add Car</h1>
//         <Card>
//           <form onSubmit={onsubmit} className="space-y-8 mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Destination Name */}

//               <TextField name="name" isRequired>
//                 <Label>Car Name</Label>
//                 <Input placeholder="Car name..." className="rounded-md" />
//                 <FieldError />
//               </TextField>
//               <TextField name="price" isRequired>
//                 <Label>Daily Rent Price</Label>
//                 <Input placeholder="Price.." className="rounded-md" />
//                 <FieldError />
//               </TextField>

//               {/* Country */}
//               <TextField name="seats" isRequired>
//                 <Label>Seat Capacity</Label>
//                 <Input placeholder="Seat..." className="rounded-md" />
//                 <FieldError />
//               </TextField>

//               {/* Category - Updated Select Component */}
//               <div>
//                 <Select
//                   name="category"
//                   isRequired
//                   className="w-full"
//                   placeholder="Car Type"
//                 >
//                   <Label>Car Type</Label>
//                   <Select.Trigger className="rounded-md">
//                     <Select.Value />
//                     <Select.Indicator />
//                   </Select.Trigger>
//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="SUV" textValue="SUV">
//                         SUV
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Sedan" textValue="Sedan">
//                         Sedan
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Hatchback" textValue="Hatchback">
//                         Hatchback
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Luxury" textValue="Luxury">
//                         Luxury
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>
//               {/* Image URL - Removed preview */}
//               <div className="md:col-span-2">
//                 <TextField name="img" isRequired>
//                   <Label>Image URL</Label>
//                   <Input
//                     type="url"
//                     placeholder="https://example.com/bali-paradise.jpg"
//                     className="rounded-md"
//                   />
//                   <FieldError />
//                 </TextField>
//               </div>

//               {/* Duration */}
//               <TextField name="location" isRequired>
//                 <Label>PickUp Location</Label>
//                 <Input placeholder="Location..." className="rounded-md" />
//                 <FieldError />
//               </TextField>
//               <TextField name="brand" isRequired>
//                 <Label>Brand</Label>
//                 <Input placeholder="Brand..." className="rounded-md" />
//                 <FieldError />
//               </TextField>
//               <TextField name="year" isRequired>
//                 <Label>Year</Label>
//                 <Input placeholder="Year..." className="rounded-md" />
//                 <FieldError />
//               </TextField>
//               <TextField name="version" type="date" isRequired>
//                 <Label>Version</Label>
//                 <Input type="text" className="rounded-md" />
//                 <FieldError />
//               </TextField>
//               <div>
//                 <Select
//                   name="transmission"
//                   isRequired
//                   className="w-full"
//                   placeholder="transmission"
//                 >
//                   <Label>Transmission</Label>
//                   <Select.Trigger className="rounded-md">
//                     <Select.Value />
//                     <Select.Indicator />
//                   </Select.Trigger>
//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="Automatic" textValue="Automatic">
//                         Automatic
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Manual" textValue="Manual">
//                         Manual
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>
//               <div>
//                 <Select
//                   name="fuelType"
//                   isRequired
//                   className="w-full"
//                   placeholder="Fuel Type"
//                 >
//                   <Label>Fuel Type</Label>
//                   <Select.Trigger className="rounded-md">
//                     <Select.Value />
//                     <Select.Indicator />
//                   </Select.Trigger>
//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="Petrol" textValue="Petrol">
//                         Petrol
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Hybrid" textValue="Hybrid">
//                         Hybrid
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Diesel" textValue="Diesel">
//                         Diesel
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>

//               <div>
//                 <Select
//                   name="isAvailable"
//                   isRequired
//                   className="w-full"
//                   placeholder="Status"
//                 >
//                   <Label>Status</Label>
//                   <Select.Trigger className="rounded-md">
//                     <Select.Value />
//                     <Select.Indicator />
//                   </Select.Trigger>
//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="true" textValue="true">
//                         true
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="false" textValue="false">
//                         false
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>

//               {/* Description */}
//               <div className="md:col-span-2">
//                 <TextField name="description" isRequired>
//                   <Label>Description</Label>
//                   <TextArea
//                     placeholder="Describe the travel experience..."
//                     className="rounded-md"
//                   />
//                   <FieldError />
//                 </TextField>
//               </div>
//             </div>

//             {/* Buttons */}

//             <Button
//               type="submit"
//               variant="outline"
//               className=" rounded-none w-full bg-cyan-500 text-white"
//             >
//               Add Car
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default addCar;

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
import React from "react";
import { toast } from "react-toastify";

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

    try {
      const res = await fetch("http://localhost:5000/car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        toast.success("Successfully Added");
        e.target.reset();
      } else {
        toast.error("Failed to add car");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="max-w-300 mx-auto py-8">
        <h1 className="text-xl font-bold">Add Car</h1>

        <Card className="p-6">
          <form onSubmit={onsubmit} className="space-y-8 mt-8">
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

            <Button type="submit" className="w-full bg-cyan-500 text-white">
              Add Car
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCar;
