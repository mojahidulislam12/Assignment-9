"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

const BookingCancle = ({ bookingId }) => {
  const handleCancel = async () => {
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );
    const data = res.json();
    toast.error("Booking Cancel Successfully");
    window.location.reload();
  };
  return (
    <div>
      <AlertDialog>
        <Button className="w-20 btn ml-2 hover:bg-danger hover:text-white">
          <AiOutlineDelete />
          Cancel
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
