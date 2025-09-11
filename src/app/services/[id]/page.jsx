import Image from "next/image";
import React from "react";
import serviceImage from "../../../../public/assets/images/checkout/checkout.png";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const singleService = await res.json();

  const services = [
    { id: 1, name: "Full Car Repair" },
    { id: 2, name: "Engine Repair" },
    { id: 3, name: "Automatic Services" },
    { id: 4, name: "Engine Oil Change" },
    { id: 5, name: "Battery Charge" },
  ];

  const downloads = [
    { id: 1, title: "Our Brochure", subtitle: "Download", link: "#" },
    { id: 2, title: "Company Details", subtitle: "Download", link: "#" },
  ];

  if (!singleService) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Service not found!</h2>
      </div>
    );
  }

  return (
    <section className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* service banner */}
      <figure className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={serviceImage}
          alt={"serviceImage"}
          fill
          className="object-cover"
        ></Image>
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-20% from-black/70 to-80% to-black/10 bg-transparent">
          <div className="flex items-center justify-center w-full h-full p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Service Details
            </h2>
          </div>
        </div>
        <div className="absolute z-20 bottom-0 flex left-1/2 transform -translate-x-1/2">
          <button className="btn btn-secondary shape">
            Home/Service Details
          </button>
        </div>
      </figure>

      {/* service details information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* left side */}
        <div className="lg:col-span-9 max-h-[900px] overflow-y-auto scroll-smooth">
          {/* Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={singleService.img}
              alt={singleService.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title & Price */}
          <div className="mt-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">{singleService.title}</h1>
            <p className="text-lg font-semibold text-primary">
              Price: ${singleService.price}
            </p>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {singleService.description}
          </p>

          {/* Facilities */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Facilities</h2>
            <ul className="space-y-3">
              {singleService.facility.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* right side */}
        <aside className="lg:col-span-3 space-y-5">
          {/* services */}
          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition 
              ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 border-gray-200"
              }`}
                >
                  <span className="font-medium">{service.name}</span>
                  <FiArrowRight
                    className={`text-xl ${
                      index === 0 ? "text-white" : "text-red-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* download resource */}
          <div className="bg-black text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Download</h2>
            <div className="space-y-4">
              {downloads.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-black border-b border-gray-700 pb-3"
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-3">
                    <FiFileText className="text-2xl text-white" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <a
                    href={item.link}
                    className="w-10 h-10 flex items-center justify-center bg-primary rounded-md hover:bg-primary/80 transition"
                  >
                    <FiArrowRight className="text-white text-lg" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* processed to checkout */}
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Price: ${singleService.price}
            </h2>
            <Link href={`/checkout/${id}`} className="btn btn-primary w-full rounded-lg">
              Processed To Checkout
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
