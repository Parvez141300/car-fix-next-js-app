"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottie from "../../../../../public/RegisterLottie.json";
import { registerUser } from "@/app/actions/auth/registerUser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import SocialLogin from "../../_components/SocialLogin";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, confirmPassword } =
      Object.fromEntries(formData);
    if (password !== confirmPassword) {
      return toast.error("Password didn't matched", {
        position: "bottom-right",
      });
    }

    const createdAt = new Date().toISOString();
    const payload = { name, email, password, createdAt };

    try {
      setLoading(true);
      const res = await registerUser(payload);
      console.log('resonse is:', res);
      if (res.insertedId) {
        setLoading(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      {/* lottie file json */}
      <div>
        <Lottie animationData={registerLottie} loop={true}></Lottie>
      </div>
      {/* register form */}
      <div className="card w-full lg:max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl font-bold mb-2">
            Create Account
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Join us today! Fill out the form to get started.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <label className="input focus-within:outline-none flex items-center gap-2 w-full rounded-lg">
                <FaUser className="text-base-content/70" />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="John Doe"
                  required
                />
              </label>
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input focus-within:outline-none flex items-center gap-2 w-full rounded-lg">
                <FaEnvelope className="text-base-content/70" />
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="john@example.com"
                  required
                />
              </label>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input focus-within:outline-none flex items-center gap-2 w-full rounded-lg">
                <FaLock className="text-base-content/70" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="grow"
                  placeholder="••••••••"
                  required
                />
                <button
                  onClick={() => setShowPassword((prv) => !prv)}
                  type="button"
                  className="btn btn-ghost btn-sm"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </label>
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input focus-within:outline-none flex items-center gap-2 w-full rounded-lg">
                <FaLock className="text-base-content/70" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="grow"
                  placeholder="••••••••"
                  required
                />
                <button
                  onClick={() => setShowConfirmPassword((prv) => !prv)}
                  type="button"
                  className="btn btn-ghost btn-sm"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`btn btn-primary w-full rounded-lg flex items-center gap-1`}
              >
                {loading ? <span className="loading loading-spinner"></span> : ""}
                {loading ? 'Registering' : 'Register'}
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          {/* social login */}
          <SocialLogin></SocialLogin>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href={"/login"} className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
