import React from "react";
import HomeCard from "../Components/HomeCard";
import { FaClock, FaListUl } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import ApplicationTable from "../Components/ApplicationTable";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <div className="grid grid-cols-3 gap-5">
        <HomeCard
          count={0}
          title="Total Applies"
          icon={<FaListUl size={35} className="text-blue-300" />}
        />
        <HomeCard
          count={0}
          title="Responsed"
          icon={<FaCheckCircle size={35} className="text-green-300" />}
        />
        <HomeCard
          count={0}
          title="Pending"
          icon={<FaClock size={35} className="text-red-300" />}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <h5 className="flex items-center gap-3">
            Recent Applies{" "}
            <span className="text-sm! text-gray-500">
              (Last 5 Applications)
            </span>
          </h5>
          <Link
            to="/applies"
            className="text-pink-400 hover:text-pink-500 text-sm font-semibold tracking-wider hover:underline underline-offset-4"
          >
            View All
          </Link>
        </div>
        <ApplicationTable slice={5} />
      </div>
    </div>
  );
};

export default Home;
