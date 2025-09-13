import Image from "next/image";
import { FaTools, FaUsers, FaAward, FaHeart } from "react-icons/fa";
import aboutImage from "../../../public/assets/images/banner/3.jpg"

const AboutPage = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">About CarFix</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for automotive care and maintenance since 2010.
          We provide top-quality service with a commitment to excellence.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={aboutImage} // Replace with your actual image path
              alt="CarFix professional mechanics at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-700">
            Founded in 2010, CarFix began as a small garage with a big vision:
            to provide honest, reliable, and expert automotive services to our
            community. Over the years, we've grown into a full-service
            automotive center with state-of-the-art equipment and a team of
            certified technicians.
          </p>
          <p className="text-gray-700">
            What sets us apart is our commitment to transparency and customer
            education. We explain every repair in detail, provide upfront
            pricing, and only recommend services that are truly necessary for
            your vehicle's health and safety.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary">Our Services</button>
            <button className="btn btn-outline btn-primary">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        <div className="stats shadow bg-base-100 text-center">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaTools className="text-3xl" />
            </div>
            <div className="stat-title">Services Offered</div>
            <div className="stat-value text-primary">50+</div>
            <div className="stat-desc">From oil changes to engine repairs</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 text-center">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl" />
            </div>
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value text-secondary">10K+</div>
            <div className="stat-desc">Served since 2010</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 text-center">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FaAward className="text-3xl" />
            </div>
            <div className="stat-title">Certified Experts</div>
            <div className="stat-value text-accent">25+</div>
            <div className="stat-desc">Technicians on staff</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 text-center">
          <div className="stat">
            <div className="stat-figure text-error">
              <FaHeart className="text-3xl" />
            </div>
            <div className="stat-title">Community Projects</div>
            <div className="stat-value text-error">15+</div>
            <div className="stat-desc">Supported annually</div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="space-y-8 py-8">
        <h2 className="text-3xl font-semibold text-center">
          Our Mission & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary">Integrity</h3>
              <p>
                We believe in honest recommendations and transparent pricing. No
                hidden fees, no unnecessary repairs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-secondary">Expertise</h3>
              <p>
                Our technicians are continuously trained on the latest
                automotive technologies and repair techniques.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-accent">Community</h3>
              <p>
                We're committed to supporting our local community through
                various initiatives and sponsorships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-content rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience the CarFix Difference?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Schedule your service today and discover why thousands of drivers
          trust us with their vehicles.
        </p>
        <button className="btn btn-secondary btn-lg">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
