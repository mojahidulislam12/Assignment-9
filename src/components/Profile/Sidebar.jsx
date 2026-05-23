import Image from "next/image";
import React from "react";
const user = {
  name: "John Doe",
  img: "https://randomuser.me/api/portraits/men/1.jpg",
  email: "johndoe@example.com",
};
const Sidebar = () => {
  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <Image alt="" src={user.img} />
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
