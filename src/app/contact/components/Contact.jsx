'use client';
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
    toast.success("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Contact CarFix</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions about our services or need to schedule an appointment?
          Get in touch with us today!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Get In Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@carfix.com</p>
                    <p className="text-gray-600">support@carfix.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Automotive Avenue</p>
                    <p className="text-gray-600">Detroit, MI 48201</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="card bg-error text-error-content shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl">Emergency Service</h2>
              <p className="mb-4">24/7 roadside assistance available</p>
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl" />
                <span className="text-xl font-bold">1-800-CAR-FIX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control flex flex-col">
                    <label className="label">
                      <span className="label-text">Subject *</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select select-bordered"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="service">Service Question</option>
                      <option value="quote">Request Quote</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-control flex flex-col">
                  <label className="label">
                    <span className="label-text">Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="textarea textarea-bordered h-32"
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Our Location</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace this div with your actual map component */}
            <div className="text-center">
              <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-2" />
              <p className="text-gray-600">Interactive Map Would Appear Here</p>
              <p className="text-sm text-gray-500 mt-2">
                123 Automotive Avenue, Detroit, MI 48201
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Can't find what you're looking for? Check out our FAQ section for
          quick answers to common questions.
        </p>
        <button className="btn btn-outline btn-primary">View FAQ</button>
      </div>
    </div>
  );
};

export default Contact;
