import Image from "next/image";
import React from "react";
import log from "../assets/logo.svg";
import Avatar from "../assets/user.png";
import Link from "next/link";
import { Button } from "@heroui/react";
import { RxAvatar } from "react-icons/rx";
const NavBar = () => {
  const links = (
    <>
      <Link href={"/"} className="font-semibold text-[20px] mr-5">
        <li>Home</li>
      </Link>
      <Link href={"/explore-cars"} className="font-semibold text-[20px] mr-5">
        <li>Explore Cars</li>
      </Link>
      <Link href={"/add-car"} className="font-semibold text-[20px] mr-5">
        <li>Add Car</li>
      </Link>
      <Link href={"/my-bookings"} className="font-semibold text-[20px] mr-5">
        <li>My-Bookings</li>
      </Link>
      <Link href={"/owner"} className="font-semibold text-[20px] mr-5">
        <li>Dashboard</li>
      </Link>
    </>
  );
  return (
    <div>
      <div>
        <div className=" max-w-300 mx-auto navbar bg-base-100 border-b border-border-secondary">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            <Link href={"/"}>
              {" "}
              <Image src={log} width={148} height={30} alt="logo"></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Image
              src={Avatar}
              width={41}
              height={41}
              alt="logo"
              className="mr-5"
            ></Image>
            <Link href={"/login"} className="">
              <button className="btn font-semibold text-[20px]">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
