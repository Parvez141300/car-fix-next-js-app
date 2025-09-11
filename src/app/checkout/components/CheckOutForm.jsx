"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckOutForm = ({ singleService }) => {
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  const handleCheckOut = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bookingPayload = Object.fromEntries(formData);
    bookingPayload.service_name = singleService?.title;
    bookingPayload.service_id = singleService?._id;
    bookingPayload.service_img = singleService?.img;
    bookingPayload.service_price = singleService?.price;
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/api/service`, {
        method: "POST",
        body: JSON.stringify(bookingPayload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();

      console.log("responseData is: ", responseData);

      if (responseData.insertedId) {
        toast.success("Successfully Submitted Booking", {
          position: "top-center",
          autoClose: 500,
        });
        form.reset();
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
  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Checkout: {singleService?.title}
      </h1>

      <form
        onSubmit={handleCheckOut}
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
                defaultValue={singleService?.price}
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
                <span className="loading loading-spinner"></span> Ordering
              </div>
            ) : (
              "Order Confirm"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
