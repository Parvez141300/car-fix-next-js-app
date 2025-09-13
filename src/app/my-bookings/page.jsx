// "use client";
import React from "react";
import MyBookingTable from "./components/MyBookingTable";
import Image from "next/image";
import bookingImg from "../../../public/assets/images/banner/2.jpg";
import { headers } from "next/headers";

export const fetchBookings = async () => {
  try {
    // setLoading(true);
    const res = await fetch("https://car-fix-next-js-app.vercel.app/api/service", {
      headers: new Headers(await headers()),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    return [];
  }
};


const MyBookingsPage = async() => {
  // const [loading, setLoading] = useState(false);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-spinner loading-xl"></span>
  //     </div>
  //   );
  // }
  const bookings = await fetchBookings();

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* booking banner */}
      <figure className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={bookingImg}
          alt={"booking-image"}
          fill
          className="object-cover"
        ></Image>
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-20% from-black/70 to-80% to-black/10 bg-transparent">
          <div className="flex items-center justify-center w-full h-full p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Bookings Page
            </h2>
          </div>
        </div>
        <div className="absolute z-20 bottom-0 flex left-1/2 transform -translate-x-1/2">
          <button className="btn btn-secondary shape">Home/My Bookings</button>
        </div>
      </figure>
      {bookings?.length > 0 ? (
        <MyBookingTable bookings={bookings}></MyBookingTable>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>There Are No Bookings!</p>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
