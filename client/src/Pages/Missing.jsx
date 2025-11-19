import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/not-found.png";
import GirlNotFound from "../assets/girl-not-found.png";

const Missing = () => {
  return (
    <div className="page flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src={NotFound}
          alt="Not Found"
          width={450}
          className="hidden sm:block"
        />
        <img
          src={GirlNotFound}
          alt="Not Found"
          width={300}
          className="sm:hidden"
        />
        <p className="mt-5">
          Page Not Found Please Click here to{" "}
          <Link to="/" className="text-pink-500 underline underline-offset-4">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Missing;
