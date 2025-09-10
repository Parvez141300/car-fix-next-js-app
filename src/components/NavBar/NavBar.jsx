"use client";
import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLink from "../NavLink/NavLink";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Image from "next/image";

const NavBar = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  const handleLogout = () => {
    signOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Logged out",
      showConfirmButton: false,
    });
  };
  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink href={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 w-11/12 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-accent"
          >
            {links}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl px-0 text-accent">
          CarFix
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-accent">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <ThemeToggle></ThemeToggle>
        {status === "loading" ? (
          // Loader while checking session
          <span className="loading loading-spinner text-primary w-6 h-6"></span>
        ) : status === "authenticated" ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2 relative overflow-hidden">
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-secondary rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"} className="text-accent">
              Login
            </Link>
            <Link href={"/register"} className="text-accent">
              Register
            </Link>
          </>
        )}
        <a className="btn btn-secondary btn-outline rounded-md">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
