import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-base-100 hover:shadow-lg transition p-3">
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
        <p className="mt-2 text-accent font-semibold">
          Price : ${service.price}
        </p>
      </div>

      {/* Action */}
      <div className="mt-3 flex justify-end">
        <Link href={`/services/${service._id}`} className="text-accent hover:text-secondary flex items-center gap-1">
          <span>More</span>
          <IoArrowForward size={16}></IoArrowForward>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
