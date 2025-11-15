import React from "react";
import { Link } from "react-router-dom";

const FollowUp = () => {
  return (
    <div className="page">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <h3 className="uppercase ">Follow Up </h3>
        <Link to="/applies" className="btn bg-pink-400 hover:bg-pink-500">
          Applies
        </Link>
      </div>
    </div>
  );
};

export default FollowUp;
