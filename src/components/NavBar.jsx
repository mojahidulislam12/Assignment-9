"use client";

import Image from "next/image";
import React, { useState } from "react";
import log from "@/assets/images.png";
import Avatar from "../assets/user.png";
import BannerImg from "@/assets/main_car.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
  };

  const links = (
    <>
      <li className="text-lg font-medium">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg font-medium">
        <Link href="/explore-cars">Explore Cars</Link>
      </li>
    </>
  );

  return (
    <div className="bg-gray-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto navbar px-4">
        {/* Left */}
        {/* <div className="navbar-start">
          <Link href="/">
            <Image src={log} width={148} height={45} alt="logo" />
          </Link>
        </div> */}

        <div className="navbar-start">
          {" "}
          {/* Mobile Menu */}{" "}
          <div className="dropdown">
            {" "}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {" "}
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
              </svg>{" "}
            </div>{" "}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-[1] mt-3 w-56 p-3 shadow-2xl border border-gray-200"
            >
              {" "}
              {links}{" "}
            </ul>{" "}
          </div>{" "}
          {/* Logo */}{" "}
          <Link href={"/"}>
            {" "}
            <Image
              src={log}
              width={148}
              height={45}
              alt="logo"
              className="cursor-pointer rounded-md"
            />{" "}
          </Link>{" "}
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end relative">
          {user ? (
            <div className="relative">
              {/* Avatar Button */}
              <button onClick={() => setOpen(!open)}>
                <Image
                  src={user?.image || Avatar}
                  width={45}
                  height={45}
                  alt="user"
                  className="rounded-full border-2 border-blue-500 object-cover"
                />
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-4 w-75 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden ml-50 sm:ml-0 z-[999]">
                  {/* User Info */}
                  <div className="mb-4 border-b border-gray-200 pb-4 text-center bg-gray-50 rounded-xl  mt-10">
                    <Image
                      src={user?.image || Avatar}
                      width={60}
                      height={60}
                      alt="user"
                      className="rounded-full mx-auto border-2 border-blue-500 -mt-10"
                    />

                    <h2 className="font-bold mt-3">{user?.name}</h2>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>

                  {/* Menu */}
                  <div className="p-3 space-y-2">
                    <Link
                      href="/add-car"
                      // onClick={() => setOpen(false)}
                      className={`block p-3 rounded-xl hover:bg-gray-100 `}
                    >
                      Add Car
                    </Link>

                    <Link
                      href="/my-bookings"
                      // onClick={() => setOpen(false)}
                      className="block p-3 rounded-xl hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/my-added-car"
                      // onClick={() => setOpen(false)}
                      className="block p-3 rounded-xl hover:bg-gray-100"
                    >
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="btn btn-error text-white w-full rounded-xl mt-3"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <RxAvatar className="h-12 w-12" />
              <Link href="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* click outside close */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-[998]" />
      )}
    </div>
  );
};

export default NavBar;
