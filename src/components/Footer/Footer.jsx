import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-11/12 max-w-7xl mx-auto container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-5">
            <Link href={"/"} className="text-xl font-bold text-secondary mb-5">
              CarFix
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial entrepreneur.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Brake Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Oil Changes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tire Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Electrical Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Center Section */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Support Center</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Service Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Ershad Nagar, Tongi</p>
              <p>Gazipur, Dhaka</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: support@carfix.com</p>
            </div>
            <div className="pt-2">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-300">Sun-Wed: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Fri: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Why Car Doctor
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Support Center
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Feedback
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Accessibility
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CarFix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
