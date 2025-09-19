import React, { useContext } from "react";
import HomeCard from "../Components/HomeCard";
import { FaListUl } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import ApplicationTable from "../Components/ApplicationTable";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { applicationData } = useContext(AppContext);

  const responseCount = applicationData?.filter(
    (app) => app.status == "Responsed"
  )?.length;

  const pendingCount = applicationData?.filter(
    (app) => app.status == "Pending"
  )?.length;

  return (
    <div className="page">
      {/* Application Info */}
      <div className="grid sm:grid-cols-3 gap-2.5 sm:gap-5">
        <HomeCard
          count={applicationData?.length || 0}
          title="Total Applies"
          icon={<FaListUl size={35} className="text-blue-300" />}
        />
        <HomeCard
          count={responseCount}
          title="Responsed"
          icon={<FaCheckCircle size={35} className="text-green-300" />}
        />
        <HomeCard
          count={pendingCount}
          title="Pending"
          icon={<FaClock size={35} className="text-red-300" />}
        />
      </div>

      {/* Recent Applies */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="flex items-center gap-3">
            Recent Applies{" "}
            <span className="hidden sm:block !text-gray-500">
              (Last 5 Applications)
            </span>
          </h3>
          <Link
            to="/all-applies"
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold tracking-wider hover:underline underline-offset-4"
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
