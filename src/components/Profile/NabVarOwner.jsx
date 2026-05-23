import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";
const user = {
  name: "John Doe",
  img: "https://randomuser.me/api/portraits/men/1.jpg",
  email: "johndoe@example.com",
};
const NabVarOwner = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500  border-b relative transition-all">
        <Link href={"/"}>
          <Image src={logo} alt="" height={28} width={28}></Image>
        </Link>
        <p>Welcome, {user.name || "Owner"}</p>
      </div>
    </div>
  );
};

export default NabVarOwner;
