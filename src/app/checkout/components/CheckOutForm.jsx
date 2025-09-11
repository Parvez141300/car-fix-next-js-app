"use client";
import React from "react";

const CheckOutForm = () => {
  const handleCheckOut = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formInfo = Object.fromEntries(formData);
    console.log("check out form info", formInfo);
  };
  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>

      <form
        onSubmit={handleCheckOut}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* first name field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input focus-within:outline-none w-full"
            required
          />
        </div>
        {/* last name field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input focus-within:outline-none w-full"
            required
          />
        </div>
        {/* phone number field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
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
            type="email"
            name="email"
            placeholder="Your Email"
            className="input focus-within:outline-none w-full"
            required
          />
        </div>
        {/* message input field */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered h-24 focus-within:outline-none w-full"
            required
          ></textarea>
        </div>
        {/* submit button */}
        <div className="form-control md:col-span-2 flex justify-end gap-3">
          <button type="submit" className={`btn btn-primary btn-outline rounded-lg`}>
           Reset Form
          </button>
          <button type="submit" className={`btn btn-primary rounded-lg`}>
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
