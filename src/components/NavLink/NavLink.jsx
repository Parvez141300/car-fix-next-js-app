"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, className = "" }) => {
  const pathname = usePathname();
  const isActive = href == pathname;
  return (
    <Link href={href} className={`${className} ${isActive ? 'text-secondary font-bold' : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
