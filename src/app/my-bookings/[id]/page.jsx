import React from "react";
import BookingUpdateForm from "../components/BookingUpdateForm";
import Image from "next/image";
import checkOutImage from "../../../../public/assets/images/checkout/checkout.png";
import { headers } from "next/headers";

const UpdateBookingPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/my-bookings/${id}`, {
    headers: await headers(),
  });
  const bookingData = await res.json();
  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* booking/check out banner */}
      <figure className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={checkOutImage}
          alt={"update-booking-or-check-out-image"}
          fill
          className="object-cover"
        ></Image>
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-20% from-black/70 to-80% to-black/10 bg-transparent">
          <div className="flex items-center justify-center w-full h-full p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Booking/Booking or Check Out Update
            </h2>
          </div>
        </div>
        <div className="absolute z-20 bottom-0 flex left-1/2 transform -translate-x-1/2">
          <button className="btn btn-secondary shape">
            Home/Update Booking or Checkout
          </button>
        </div>
      </figure>
      {/* update booking form */}
      <BookingUpdateForm bookingData={bookingData}></BookingUpdateForm>
    </div>
  );
};

export default UpdateBookingPage;
