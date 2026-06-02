import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const ListYourCar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`);
  const cars = await res.json();
  const data = cars.filter((car) => car.userId === user.id);
  console.log(data);

  return (
    <div>
      <div className="max-w-300 mx-auto mt-10">
        <div>
          <h1 className="font-bold text-2xl">
            My Added Car List:
            <span className="ml-2 text-2xl font-semibold text-green-500">
              {data.length}
            </span>
          </h1>
        </div>
        <div className="mt-4">
          {data.map((carName, i) => (
            <ol key={i}>
              {" "}
              <li>
                <span className="font-semibold mr-2">{i + 1}.</span>
                {carName.name}
              </li>
            </ol>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListYourCar;
