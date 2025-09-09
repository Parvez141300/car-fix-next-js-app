"use client";
import Lottie from "lottie-react";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";
import registerLottie from "../../../../../public/LoginLottie.json";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import SocialMediaIcons from "../../_components/SocialMediaIcons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (res.ok) {
        router.push("/");
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Error: Authentication Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      console.log("error message", error);
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
            Login Account
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Join us today! Fill out the form to get started.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
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

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                disabled={loading}
                type="submit"
                className={`btn btn-primary w-full rounded-lg flex items-center gap-1`}
              >
                {loading ? <span class="loading loading-spinner"></span> : ""}
                {loading ? "Logging In" : "Login"}
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <SocialMediaIcons></SocialMediaIcons>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link href={"/register"} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
