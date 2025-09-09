"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaGithub, FaLock, FaUser } from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottie from "../../../../public/RegisterLottie.json";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
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
                  type="password"
                  name="password"
                  className="grow"
                  placeholder="••••••••"
                />
                <button type="button" className="btn btn-ghost btn-sm">
                  <FaEyeSlash /> : <FaEye />
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
                  type="password"
                  name="confirmPassword"
                  className="grow"
                  placeholder="••••••••"
                />
                <button type="button" className="btn btn-ghost btn-sm">
                  <FaEyeSlash /> <FaEye />
                </button>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full rounded-lg`}
              >
                Register
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="flex flex-col gap-2 mt-4">
            <button className="btn btn-outline rounded-lg">
            <FcGoogle size={25} /> Login with Google
            </button>
            <button className="btn btn-outline rounded-lg">
            <FaGithub size={25} /> Login with GitHub
            </button>
          </div>

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
