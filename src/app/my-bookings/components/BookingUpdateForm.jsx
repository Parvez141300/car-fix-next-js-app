"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingUpdateForm = ({ bookingData }) => {
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const router = useRouter();

  const handleBookingUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const { date, phone, address } = Object.fromEntries(formData);
    const bookingPayload = { date, phone, address };
    console.log("from update form", bookingPayload);
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/my-bookings/${bookingData?.service_id}`,
        {
          method: "PATCH",
          body: JSON.stringify(bookingPayload),
        }
      );

      const responseData = await res.json();
      console.log("updated responseData is: ", responseData);

      if (responseData?.modifiedCount) {
        toast.success("Successfully Updated Booking", {
          position: "top-center",
          autoClose: 500,
        });
        router.push("/my-bookings");
      }
    } catch (error) {
      setLoading(false);
      toast.success(error.message, {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleBookingUpdate = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const {address, date, phone} = Object.fromEntries(formData);
  //   console.log('booking update form info', {address, date, phone});  
  // }
  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Update Booking/Checkout: {bookingData?.service_id}
      </h1>

      <form
        onSubmit={handleBookingUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* name field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customer Name</span>
          </label>
          <input
            defaultValue={data?.user?.name}
            readOnly
            type="text"
            name="customerName"
            placeholder="First Name"
            className="input focus-within:outline-none w-full"
            required
          />
        </div>
        {/* Date & time field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date & Time</span>
          </label>
          <input
            defaultValue={bookingData?.date}
            name="date"
            type="datetime-local"
            className="input focus-within:outline-none w-full"
            required
          />
        </div>
        {/* phone, email, due container */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Phone Number field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                defaultValue={bookingData?.phone}
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="input focus-within:outline-none w-full"
                required
              />
            </div>
            {/* email address field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                readOnly
                type="email"
                name="email"
                placeholder="Your Email"
                className="input focus-within:outline-none w-full"
                required
              />
            </div>
            {/* Due Amount field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                defaultValue={bookingData?.price}
                readOnly
                type="number"
                name="price"
                placeholder="Please give due amount"
                className="input focus-within:outline-none w-full"
                required
              />
            </div>
          </div>
        </div>
        {/* Address input field */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <textarea
            defaultValue={bookingData?.address}
            name="address"
            placeholder="Your Address"
            className="textarea textarea-bordered h-24 focus-within:outline-none w-full"
            required
          ></textarea>
        </div>
        {/* submit & reset button */}
        <div className="form-control md:col-span-2 flex justify-end gap-3">
          <button
            type="reset"
            className={`btn btn-primary btn-outline rounded-lg`}
          >
            Reset Form
          </button>
          <button
            disabled={loading}
            type="submit"
            className={`btn btn-primary rounded-lg`}
          >
            {loading ? (
              <div>
                <span className="loading loading-spinner"></span> Updating
                Booking
              </div>
            ) : (
              "Update Booking"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingUpdateForm;
