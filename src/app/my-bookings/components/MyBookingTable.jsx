import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";
import DeleteBooking from "./DeleteBooking";

const MyBookingTable = ({ bookings }) => {
  console.log("bookings are: ", bookings);
  //   {
  //     "_id": "68c276a881d55e854de4b33d",
  //     "customerName": "parvez hossain",
  //     "date": "2017-11-23T09:19",
  //     "phone": "+1 (609) 949-9338",
  //     "email": "parvezhossain744471@gmail.com",
  //     "price": "20.00",
  //     "address": "Commodo nesciunt ni",
  //     "service_name": "Engine Oil Change",
  //     "service_id": "68be91b1ef89355d694e4418",
  //     "service_img": "https://i.ibb.co/T2cpBd5/888.jpg",
  //     "service_price": "20.00"
  // }
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => {
              return (
                <tr
                  key={booking._id}
                  className={`hover:bg-base-300 ${
                    (index + 1) % 2 == 0 ? "bg-base-200" : ""
                  }`}
                >
                  <th>{index + 1}</th>
                  <td>
                    <Image
                      src={booking?.service_img}
                      alt={booking?.service_name}
                      width={50}
                      height={50}
                    ></Image>
                  </td>
                  <td>{booking?.service_name}</td>
                  <td>{booking?.date}</td>
                  <td>{booking?.price}</td>
                  <td className="space-x-2">
                    <button className="btn rounded-lg">
                      <FaEdit size={10}></FaEdit>
                      Edit
                    </button>
                    <DeleteBooking bookingId={booking?._id}></DeleteBooking>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingTable;
