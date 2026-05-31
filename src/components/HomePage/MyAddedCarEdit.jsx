// "use client";

// import {
//   Button,
//   Select,
//   Input,
//   Label,
//   Modal,
//   Surface,
//   TextField,
//   FieldError,
//   ListBox,
//   TextArea,
// } from "@heroui/react";

// const MyAddedCarEdit = ({ car }) => {
//   const onsubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const carsData = Object.fromEntries(formData.entries());

//     const carData = {
//       userId: user?.id,
//       ...carsData,
//       price: Number(carsData.price),
//       seats: Number(carsData.seats),
//       year: Number(carsData.year),
//       isAvailable: carsData.isAvailable === "true",
//       userEmail: user?.email,
//       userName: user?.name,
//       userImage: user?.image,
//     };

//     console.log(carData);

//     const res = await fetch(`http://localhost:5000/car/${car.userId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(carData),
//     });

//     const data = await res.json();
//     window.location.reload();

//     console.log(data);
//   };

//   return (
//     <div>
//       <Modal>
//         <Button
//           variant="success"
//           className="w-20 btn hover:bg-success hover:text-white"
//         >
//           Edit
//         </Button>
//         <Modal.Backdrop>
//           <Modal.Container placement="auto">
//             <Modal.Dialog className="sm:max-w-md">
//               <Modal.CloseTrigger />
//               <Modal.Header>
//                 <Modal.Icon className="bg-accent-soft text-accent-soft-foreground"></Modal.Icon>
//                 <Modal.Heading>Contact Us</Modal.Heading>
//               </Modal.Header>
//               <Modal.Body className="p-6">
//                 <Surface variant="default">
//                   <form onSubmit={onsubmit} className="space-y-8 mt-8">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <TextField defaultValue={car.name} name="name" isRequired>
//                         <Label>Car Name</Label>
//                         <Input placeholder="Car name..." />
//                         <FieldError />
//                       </TextField>

//                       <TextField
//                         defaultValue={car.price}
//                         name="price"
//                         isRequired
//                       >
//                         <Label>Daily Rent Price</Label>
//                         <Input type="number" placeholder="Price.." />
//                         <FieldError />
//                       </TextField>

//                       <TextField
//                         defaultValue={car.seats}
//                         name="seats"
//                         isRequired
//                       >
//                         <Label>Seat Capacity</Label>
//                         <Input type="number" placeholder="Seat..." />
//                         <FieldError />
//                       </TextField>

//                       {/* Category */}
//                       <div>
//                         <Label>Car Type</Label>

//                         <Select
//                           defaultValue={car.category}
//                           name="category"
//                           isRequired
//                           className="w-full"
//                           placeholder="Car Type"
//                         >
//                           <Select.Trigger>
//                             <Select.Value />
//                             <Select.Indicator />
//                           </Select.Trigger>

//                           <Select.Popover>
//                             <ListBox>
//                               <ListBox.Item id="SUV">SUV</ListBox.Item>
//                               <ListBox.Item id="Sedan">Sedan</ListBox.Item>
//                               <ListBox.Item id="Hatchback">
//                                 Hatchback
//                               </ListBox.Item>
//                               <ListBox.Item id="Luxury">Luxury</ListBox.Item>
//                             </ListBox>
//                           </Select.Popover>
//                         </Select>
//                       </div>

//                       {/* Image */}
//                       <div className="md:col-span-2">
//                         <TextField defaultValue={car.img} name="img" isRequired>
//                           <Label>Image URL</Label>
//                           <Input
//                             type="url"
//                             placeholder="https://example.com/car.jpg"
//                           />
//                           <FieldError />
//                         </TextField>
//                       </div>

//                       <TextField
//                         defaultValue={car.location}
//                         name="location"
//                         isRequired
//                       >
//                         <Label>PickUp Location</Label>
//                         <Input placeholder="Location..." />
//                         <FieldError />
//                       </TextField>

//                       <TextField
//                         defaultValue={car.brand}
//                         name="brand"
//                         isRequired
//                       >
//                         <Label>Brand</Label>
//                         <Input placeholder="Brand..." />
//                         <FieldError />
//                       </TextField>

//                       <TextField defaultValue={car.year} name="year" isRequired>
//                         <Label>Year</Label>
//                         <Input type="number" placeholder="Year..." />
//                         <FieldError />
//                       </TextField>

//                       <TextField
//                         defaultValue={car.version}
//                         name="version"
//                         isRequired
//                       >
//                         <Label>Version</Label>
//                         <Input type="text" placeholder="2024 XSE" />
//                         <FieldError />
//                       </TextField>

//                       {/* Transmission */}
//                       <div>
//                         <Label>Transmission</Label>

//                         <Select
//                           defaultValue={car.transmission}
//                           name="transmission"
//                           isRequired
//                           className="w-full"
//                           placeholder="Transmission"
//                         >
//                           <Select.Trigger>
//                             <Select.Value />
//                             <Select.Indicator />
//                           </Select.Trigger>

//                           <Select.Popover>
//                             <ListBox>
//                               <ListBox.Item id="Automatic">
//                                 Automatic
//                               </ListBox.Item>
//                               <ListBox.Item id="Manual">Manual</ListBox.Item>
//                             </ListBox>
//                           </Select.Popover>
//                         </Select>
//                       </div>

//                       {/* Fuel */}
//                       <div>
//                         <Label>Fuel Type</Label>

//                         <Select
//                           defaultValue={car.fuelType}
//                           name="fuelType"
//                           isRequired
//                           className="w-full"
//                           placeholder="Fuel Type"
//                         >
//                           <Select.Trigger>
//                             <Select.Value />
//                             <Select.Indicator />
//                           </Select.Trigger>

//                           <Select.Popover>
//                             <ListBox>
//                               <ListBox.Item id="Petrol">Petrol</ListBox.Item>
//                               <ListBox.Item id="Hybrid">Hybrid</ListBox.Item>
//                               <ListBox.Item id="Diesel">Diesel</ListBox.Item>
//                             </ListBox>
//                           </Select.Popover>
//                         </Select>
//                       </div>

//                       {/* Status */}
//                       <div>
//                         <Label>Status</Label>

//                         <Select
//                           defaultValue={car.isAvailable}
//                           name="isAvailable"
//                           isRequired
//                           className="w-full"
//                           placeholder="Status"
//                         >
//                           <Select.Trigger>
//                             <Select.Value />
//                             <Select.Indicator />
//                           </Select.Trigger>

//                           <Select.Popover>
//                             <ListBox>
//                               <ListBox.Item id="true">true</ListBox.Item>
//                               <ListBox.Item id="false">false</ListBox.Item>
//                             </ListBox>
//                           </Select.Popover>
//                         </Select>
//                       </div>

//                       {/* Description */}
//                       <div className="md:col-span-2">
//                         <TextField
//                           defaultValue={car.description}
//                           name="description"
//                           isRequired
//                         >
//                           <Label>Description</Label>

//                           <TextArea placeholder="Describe the car..." />

//                           <FieldError />
//                         </TextField>
//                       </div>
//                     </div>

//                     <Modal.Footer>
//                       <Button slot="close">Submit</Button>
//                     </Modal.Footer>
//                   </form>
//                 </Surface>
//               </Modal.Body>
//             </Modal.Dialog>
//           </Modal.Container>
//         </Modal.Backdrop>
//       </Modal>
//     </div>
//   );
// };

// export default MyAddedCarEdit;

"use client";

import {
  Button,
  Select,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  FieldError,
  ListBox,
  TextArea,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const MyAddedCarEdit = ({ car }) => {
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
      const res = await fetch(`http://localhost:5000/car/${car.userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      console.log(data);

      if (data.modifiedCount > 0) {
        alert("Car Updated Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal>
        <Modal.Trigger>
          <Button
            variant="success"
            className="w-20 hover:bg-success hover:text-white"
          >
            Edit
          </Button>
        </Modal.Trigger>

        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-4xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Edit Car</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="space-y-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Car Name */}
                      <TextField defaultValue={car.name} name="name" isRequired>
                        <Label>Car Name</Label>

                        <Input placeholder="Car name..." />

                        <FieldError />
                      </TextField>

                      {/* Price */}
                      <TextField
                        defaultValue={car.price}
                        name="price"
                        isRequired
                      >
                        <Label>Daily Rent Price</Label>

                        <Input type="number" placeholder="Price.." />

                        <FieldError />
                      </TextField>

                      {/* Seats */}
                      <TextField
                        defaultValue={car.seats}
                        name="seats"
                        isRequired
                      >
                        <Label>Seat Capacity</Label>

                        <Input type="number" placeholder="Seat..." />

                        <FieldError />
                      </TextField>

                      {/* Category */}
                      <div>
                        <Label>Car Type</Label>

                        <Select
                          name="category"
                          defaultValue={car.category}
                          placeholder="Car Type"
                          className="w-full"
                          aria-label="Car Type"
                          isRequired
                        >
                          <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="SUV">SUV</ListBox.Item>

                              <ListBox.Item id="Sedan">Sedan</ListBox.Item>

                              <ListBox.Item id="Hatchback">
                                Hatchback
                              </ListBox.Item>

                              <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Image */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={car.img} name="img" isRequired>
                          <Label>Image URL</Label>

                          <Input
                            type="url"
                            placeholder="https://example.com/car.jpg"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Location */}
                      <TextField
                        defaultValue={car.location}
                        name="location"
                        isRequired
                      >
                        <Label>PickUp Location</Label>

                        <Input placeholder="Location..." />

                        <FieldError />
                      </TextField>

                      {/* Brand */}
                      <TextField
                        defaultValue={car.brand}
                        name="brand"
                        isRequired
                      >
                        <Label>Brand</Label>

                        <Input placeholder="Brand..." />

                        <FieldError />
                      </TextField>

                      {/* Year */}
                      <TextField defaultValue={car.year} name="year" isRequired>
                        <Label>Year</Label>

                        <Input type="number" placeholder="Year..." />

                        <FieldError />
                      </TextField>

                      {/* Version */}
                      <TextField
                        defaultValue={car.version}
                        name="version"
                        isRequired
                      >
                        <Label>Version</Label>

                        <Input type="text" placeholder="2024 XSE" />

                        <FieldError />
                      </TextField>

                      {/* Transmission */}
                      <div>
                        <Label>Transmission</Label>

                        <Select
                          name="transmission"
                          defaultValue={car.transmission}
                          placeholder="Transmission"
                          className="w-full"
                          aria-label="Transmission"
                          isRequired
                        >
                          <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Automatic">
                                Automatic
                              </ListBox.Item>

                              <ListBox.Item id="Manual">Manual</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Fuel Type */}
                      <div>
                        <Label>Fuel Type</Label>

                        <Select
                          name="fuelType"
                          defaultValue={car.fuelType}
                          placeholder="Fuel Type"
                          className="w-full"
                          aria-label="Fuel Type"
                          isRequired
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
                          defaultValue={car.isAvailable}
                          placeholder="Status"
                          className="w-full"
                          aria-label="Status"
                          isRequired
                        >
                          <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="true">Available</ListBox.Item>

                              <ListBox.Item id="false">
                                Unavailable
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={car.description}
                          name="description"
                          isRequired
                        >
                          <Label>Description</Label>

                          <TextArea placeholder="Describe the car..." />

                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    <Modal.Footer>
                      <Button type="submit">Update Car</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default MyAddedCarEdit;
