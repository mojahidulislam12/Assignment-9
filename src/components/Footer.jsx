import Image from "next/image";
import React from "react";
import log from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 mt-40 text-gray-600 pt-12">
      <div className="flex flex-wrap justify-between gap-10 pb-10">
        {/* Logo & About */}
        <div className="max-w-80">
          {/* <Image
            src={log}
            alt="logo"
            className="mb-4 h-8 md:h-9"
            width={150}
            height={150}
          /> */}
          <h1 className="mb-4 font-bold text-2xl">CarRental</h1>

          <p className="text-sm">
            AutoRent makes car rental simple, fast, and affordable. Choose from
            economy, luxury, and SUV vehicles for any trip— whether it is
            business, travel, or weekend adventures. Drive with comfort and
            confidence anywhere you go.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-5 text-gray-700">
            {/* Instagram */}
            <svg
              className="w-5 h-5 hover:text-pink-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
            </svg>

            {/* Facebook */}
            <svg
              className="w-5 h-5 hover:text-blue-600 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>

            {/* Twitter */}
            <svg
              className="w-5 h-5 hover:text-sky-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
            </svg>

            {/* LinkedIn */}
            <svg
              className="w-5 h-5 hover:text-blue-700 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
            </svg>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Rent a Car</h3>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Browse Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Luxury Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Economy Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                SUV & Family Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Weekly Deals
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Support</h3>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Booking Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Rental Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Cancellation & Refund
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Insurance Coverage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Roadside Assistance
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="max-w-80">
          <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>

          <p className="mt-3 text-sm">📍 Chattogram, Bangladesh</p>
          <p className="text-sm mt-1">📞 +880 1234-567890</p>
          <p className="text-sm mt-1">📧 support@stayventure.com</p>

          {/* Newsletter */}
          <div className="flex items-center mt-5">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none w-full"
            />
            <button className="bg-black h-9 w-10 flex items-center justify-center rounded-r text-white">
              ➜
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5 text-sm">
        <p>© {new Date().getFullYear()} StayVenture. All rights reserved.</p>

        <ul className="flex gap-4 mt-2 md:mt-0">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
