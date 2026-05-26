// "use client";
// import Image from "next/image";
// import React from "react";
// import log from "../assets/logo.svg";
// import Avatar from "../assets/user.png";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
// const NavBar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   console.log(user);

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };
//   const links = (
//     <>
//       <Link href={"/"} className="font-semibold text-[20px] mr-5">
//         <li>Home</li>
//       </Link>
//       <Link href={"/explore-cars"} className="font-semibold text-[20px] mr-5">
//         <li>Explore Cars</li>
//       </Link>
//       <Link href={"/add-car"} className="font-semibold text-[20px] mr-5">
//         <li>Add Car</li>
//       </Link>
//       <Link href={"/my-bookings"} className="font-semibold text-[20px] mr-5">
//         <li>My-Bookings</li>
//       </Link>
//       <Link href={"/owner"} className="font-semibold text-[20px] mr-5">
//         <li>Dashboard</li>
//       </Link>
//     </>
//   );
//   return (
//     <div>
//       <div>
//         <div className=" max-w-300 mx-auto navbar bg-base-100 border-b border-border-secondary">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost lg:hidden"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />{" "}
//                 </svg>
//               </div>
//               <ul
//                 tabIndex="-1"
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//               >
//                 {links}
//               </ul>
//             </div>

//             <Link href={"/"}>
//               {" "}
//               <Image src={log} width={148} height={30} alt="logo"></Image>
//             </Link>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">{links}</ul>
//           </div>
//           {user ? (
//             <div className="navbar-end">
//               <Link href={"/Dashboard"}>
//                 <Image
//                   src={user?.image || Avatar}
//                   width={41}
//                   height={41}
//                   alt="logo"
//                   className="mr-5 rounded-full"
//                 ></Image>
//               </Link>

//               <Link href={"/login"} className="">
//                 <button
//                   onClick={handleSignOut}
//                   className="btn font-semibold text-[20px]"
//                 >
//                   LogOut
//                 </button>
//               </Link>
//             </div>
//           ) : (
//             <div className="navbar-end">
//               <Image
//                 src={Avatar}
//                 width={41}
//                 height={41}
//                 alt="logo"
//                 className="mr-5"
//               ></Image>

//               <Link href={"/login"} className="">
//                 <button className="btn font-semibold text-[20px]">Login</button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

"use client";

import Image from "next/image";
import React from "react";
import log from "../assets/logo.svg";
import Avatar from "../assets/user.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <li className="text-xl">
        <Link href={"/"}>Home</Link>
      </li>

      <li className="text-xl">
        <Link href={"/explore-cars"}>Explore Cars</Link>
      </li>
    </>
  );

  return (
    <div className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto navbar bg-base-100">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link href={"/"}>
            <Image src={log} width={148} height={30} alt="logo" />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              {/* Profile Image */}
              <div tabIndex={0} role="button" className="cursor-pointer">
                <Image
                  src={user?.image || Avatar}
                  width={45}
                  height={45}
                  alt="user"
                  className="rounded-full border-2 border-blue-500"
                />
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className=" menu dropdown-content bg-base-100 rounded-box `z-[1]` mt-4  p-3 shadow-xl border border-gray-100 w-70"
              >
                {/* User Info */}
                <div className="mb-3 border-b pb-3 text-center">
                  <Image
                    src={user?.image}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-full mx-auto"
                  ></Image>
                  <h2 className="font-bold text-lg">{user?.name}</h2>

                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                <li className="text-xl">
                  <Link href={"/add-car"}>Add Car</Link>
                </li>

                <li className="text-xl">
                  <Link href={"/my-bookings"}>My Bookings</Link>
                </li>

                <li className="text-xl">
                  <Link href={"/my-added-cars"}>My Added Cars</Link>
                </li>

                <li className="mt-2 text-xl">
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
