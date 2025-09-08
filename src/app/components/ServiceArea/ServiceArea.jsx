import React from "react";
import ServiceCard from "./shared/ServiceCard";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

const ServiceArea = async () => {
  // const res = await fetch('/services.json')
  const servicesCollection = dbConnect(collectionNames.serviceCollection);
  const services = await servicesCollection.find().toArray();

  return (
    <section className="space-y-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="text-primary">Service</h4>
        <h2 className="text-2xl lg:text-3xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or
          <br />
          randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default ServiceArea;
