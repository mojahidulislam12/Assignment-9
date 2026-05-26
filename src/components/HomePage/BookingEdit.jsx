"use client";

import { Button, Label, Modal, Surface, Select, ListBox } from "@heroui/react";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";

const BookingEdit = ({ booking }) => {
  const handleBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingData = {
      driverNeeded: formData.get("driverNeeded"),
      location: formData.get("location"),
      pickupDate: formData.get("pickupDate"),
      returnDate: formData.get("returnDate"),
    };

    console.log(bookingData);

    try {
      const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      window.location.reload();
      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("Booking Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal>
        <Button className="btn btn-success text-white">
          <MdEdit />
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Booking Edit Form</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={handleBooking}
                    className="shadow-lg rounded-xl p-6 text-gray-500 space-y-4"
                  >
                    {/* Driver Needed */}
                    <div>
                      <Label>Driver Needed</Label>

                      <Select
                        name="driverNeeded"
                        defaultSelectedKeys={[booking?.driverNeeded]}
                        className="w-full"
                        isRequired
                      >
                        <Select.Trigger className="rounded-md">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Yes">Yes</ListBox.Item>

                            <ListBox.Item id="No">No</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                      <label>Booking Location</label>

                      <input
                        defaultValue={booking?.location}
                        name="location"
                        type="text"
                        className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
                        required
                      />
                    </div>

                    {/* Pickup Date */}
                    <div className="flex flex-col gap-2">
                      <label>Pickup Date</label>

                      <input
                        defaultValue={booking?.pickupDate}
                        name="pickupDate"
                        type="date"
                        className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
                        required
                      />
                    </div>

                    {/* Return Date */}
                    <div className="flex flex-col gap-2">
                      <label>Return Date</label>

                      <input
                        defaultValue={booking?.returnDate}
                        name="returnDate"
                        type="date"
                        className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
                        required
                      />
                    </div>

                    <Modal.Footer className="mt-4">
                      <Button type="submit">Edit Now</Button>
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

export default BookingEdit;
