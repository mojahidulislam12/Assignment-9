import Cars from "@/components/HomePage/Cars";
import React, { Suspense } from "react";

const exploreCars = () => {
  return (
    <div>
      <div>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl text-center"></span>
          }
        >
          <Cars></Cars>
        </Suspense>
      </div>
    </div>
  );
};

export default exploreCars;
