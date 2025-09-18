import React from "react";
import { Link } from "react-router-dom";
import ApplicationTable from "../Components/ApplicationTable";

const AllApplies = () => {
  return (
    <div className="page">
      <div className="flex items-center justify-between mb-5">
        <h2 className="uppercase">All Applies</h2>
        <Link to="/new-apply" className="btn">
          New Apply
        </Link>
      </div>

      <ApplicationTable />
    </div>
  );
};

export default AllApplies;
