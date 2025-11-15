import React from "react";
import { BsDatabaseFillX } from "react-icons/bs";
import { Link } from "react-router-dom";

const NoApplicationAlert = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-[275px]">
      <BsDatabaseFillX size={100} className="text-red-400 animate-bounce" />
      <div className="text-center">
        <h2>No Applications found!</h2>
        <p className="mt-3">
          Please click{" "}
          <Link className="text-pink-400 underline underline-offset-4">
            apply
          </Link>{" "}
          to apply the New Job Application
        </p>
      </div>
    </div>
  );
};

export default NoApplicationAlert;
