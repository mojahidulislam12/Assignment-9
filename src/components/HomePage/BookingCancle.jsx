"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const BookingCancle = ({ bookingId }) => {
  const handleCancel = async () => {
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = res.json();
    window.location.reload();
  };
  return (
    <div>
      <AlertDialog>
        <Button className="btn bg-danger text-white">
          <AiOutlineDelete />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Cancel Booking permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body></AlertDialog.Body>
              <AlertDialog.Footer>
                <Button onClick={handleCancel} slot="close" variant="danger">
                  Cancel Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingCancle;
