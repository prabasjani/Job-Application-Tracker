import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationTable from "../Components/ApplicationTable";

const Applies = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="page">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <h3 className="uppercase ">All Applies</h3>
        <div className="flex items-center gap-x-4">
          <select
            id="from"
            className="input-style py-2! w-[120px]! appearance-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="applied">Applied</option>
            <option value="pending">Pending</option>
            <option value="responsed">Responsed</option>
          </select>
          <Link to="/new-apply" className="btn bg-pink-400 hover:bg-pink-500">
            New Apply
          </Link>
        </div>
      </div>

      <ApplicationTable filter={filter} />
    </div>
  );
};

export default Applies;
